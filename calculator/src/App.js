import React, { useState } from 'react';
import './css/index.css';
import CalculatorScreen from './components/CalculatorScreen';
import ButtonCalculator from './components/ButtonCalculator';

function App() {
  const [prevVal, setPrevVal] = useState('0');
  const [currentVal, setCurrentVal] = useState('0');
  const [formula, setFormula] = useState('');

  //button AC
  function deleteAll() {
    setFormula('');
    setPrevVal('0');
    setCurrentVal('0');
  }
  // button '.'
  function checkValDecimal(val) {
    if (prevVal === '0' && currentVal === '0') {
      const val1 = currentVal + val;
      setFormula(val1);
      setPrevVal(val1);
      setCurrentVal(val1);
      return null;
    }
    const checkDecimal = prevVal.indexOf(val);
    if (checkDecimal > -1) return null;
    const val2 = formula + val;
    setCurrentVal(val);
    setPrevVal(prevVal + val);
    setFormula(val2);
  }

  // tinh toan
  function answer() {
    let sum
    try {
      sum = eval(formula);
    } catch (error) {
      return null;
    }
    sum = '' + sum;
    setPrevVal(sum);
    setCurrentVal(sum);
    sum = formula + '=' + sum;
    setFormula(sum);
  }

  // xu ly bieu thuc khi da co dau '=' 
  function checkEquals(val) {
    if (val >= '0' && val <= '9') {
      setFormula(val);
    } else {
      if (val === 'X') {
        val = '*';
      }
      setFormula(prevVal + val);
    }
    setCurrentVal(val);
    setPrevVal(val);
  }

  // button values is number
  function handlingNumber(val) {
    let newformula1;
    if (val === 'X') val = '*';
    setCurrentVal(val);
    setPrevVal(val);
    newformula1 = formula + val;
    newformula1 = newformula1.replace(/[+*][-]/g, '-')
      .replace(/[+/*][+]/g, '+')
      .replace(/[-][+]/g, '+')
      .replace(/[-/*][/]/g, '/')
      .replace(/---/g, '--')
      .replace('/+', '+')
      .replace('/--', '/-')
      .replace(/[+][*]/g, '*')
      .replace(/[-/*][*]/g, '*')
      .replace('/*', '*')
      .replace('-/', '/')
      .replace('+/', '/')
    // chuan hoa bieu thuc
    setFormula(newformula1)
  }

  // button +-*/
  function handlingCalculation(val) {
    let val1, newFormula;
    newFormula = formula + val;
    if (currentVal === '+' || currentVal === '-' || currentVal === '*' || currentVal === '/') {
      setPrevVal(val);
      setCurrentVal(val);
      setFormula(newFormula)
      return null;
    }
    val1 = prevVal + val;
    setFormula(newFormula)
    setPrevVal(val1);
  }

  function getValButton(e) {
    let val = e.target.value;
    // kiem tra do dai input
    if (prevVal.length > 20 && val >= '0' && val <= '9') {
      const val1 = prevVal;
      setPrevVal('Digit Limit Met');
      setTimeout(() => setPrevVal(val1), 1000)
      return null;
    }

    // xoa du lieu
    if (val === 'AC') {
      deleteAll()
      return null;
    }

    // value button  . 
    if (val === '.') {
      checkValDecimal(val);
      return null;
    }

    // button dau tien co value = 0
    if (prevVal === '0' && val === '0') {
      setFormula('0');
      return null;
    }

    // button dau tien value !=0
    if (prevVal === '0' && val !== '0') {
      if (val === 'X') val = '*';
      setFormula(val);
      setCurrentVal(val);
      setPrevVal(val);
      return null;
    }

    // kiem tra bieu thuc da co dau '=' chua
    let isChcek1 = formula.indexOf('=')
    if (isChcek1 !== -1) {
      checkEquals(val);
      return null;
    }

    // button value la '='
    if (val === '=') {
      if (currentVal >= '0' && currentVal <= '9')
        answer();
      return null;
    }

    // button value is number 
    if (val <= '9' && val >= '0') {
      handlingCalculation(val)
      return null;
    }

    // button value la + - * /
    handlingNumber(val)
  }

  return (
    <div className="App">
      <CalculatorScreen prevVal={prevVal} formula={formula} />
      <ButtonCalculator getValButton={getValButton} />
    </div>
  );
}

export default App;
