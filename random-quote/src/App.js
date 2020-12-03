import React, { useState, useEffect } from 'react';
import { Content } from './components/Content';
import { FaTwitter, FaTumblr } from "react-icons/fa";

import './css/index.css';

export function App() {
  const [STATUS_SUCCESS, READY_STATE] = [200, 4];

  const [data, setData] = useState([]);
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState([155, 206, 209]);
  const [opacity, setOpacity] = useState(1);

  const api = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";


  async function fetchData() {
    const res = await fetch(api);
    if (res.status === STATUS_SUCCESS) {
      res
        .json()
        .then(res => {
          setData(res.quotes)
          return res.quotes
        })
        .then(data => { setQuote(data[Math.floor(Math.random() * data.length)]) })
    }
  }

  // function getXMLHttpRequestData() {
  //   let xhttp = new XMLHttpRequest();
  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState === READY_STATE && this.status === STATUS_SUCCESS) {
  //       const newData = JSON.parse(xhttp.responseText)
  //       setData(newData.quotes);
  //       const a = new Promise((resolve, reject) => {
  //         resolve(newData)
  //       })
  //       a.then(res => {
  //         setData(res.quotes)
  //         return res.quotes
  //       })
  //         .then(data => { setQuote(data[Math.floor(Math.random() * data.length)]) })
  //     } else {
  //       return null;
  //     }
  //   };
  //   xhttp.open("GET", api, true);
  //   xhttp.send();
  // }

  useEffect(() => {
    fetchData();
    // getXMLHttpRequestData();
  }, []);

  function changeContent() {
    const newIndex = Math.floor(Math.random() * data.length);
    setQuote(data[newIndex]);
  }

  function changeStateColor(newArr, currentArr) {
    let dem = 1;
    let check = true;
    function deQui() {
      if (!check && dem >= 1) return null;
      if (check && dem > 0) {
        if (dem < 0.1) {
          check = !check;
          changeContent()
        }
        dem -= 0.05;
        setOpacity(dem);
      }
      if (!check && dem <= 1) {
        dem += 0.05;
        setOpacity(dem);
      }

      if (newArr[0] === currentArr[0] && newArr[1] === currentArr[1] && newArr[2] === currentArr[2]) {
        setOpacity(1);
        return null
      }
      if (newArr[0] > currentArr[0]) {
        currentArr[0]++;
      }
      if (newArr[0] < currentArr[0]) {
        currentArr[0]--;
      }

      if (newArr[1] > currentArr[1]) {
        currentArr[1]++;
      }
      if (newArr[1] < currentArr[1]) {
        currentArr[1]--;
      }

      if (newArr[2] > currentArr[2]) {
        currentArr[2]++;
      }
      if (newArr[2] < currentArr[2]) {
        currentArr[2]--;
      }
      setColor([...currentArr]);
      requestAnimationFrame(deQui);
    }
    deQui();
  }

  function changeButton() {
    let arr = [];
    let arr1 = [...color]
    arr.push(Math.floor(Math.random() * 255));
    arr.push(Math.floor(Math.random() * 255));
    arr.push(Math.floor(Math.random() * 255));
    changeStateColor(arr, arr1);
  }

  return (
    <div className="App" style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
      <section className="content">
        <Content quote={quote} color={color} opacity={opacity} />
        <footer>
          <div className="button-group">
            <a href="aaa.com" className="button" style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}><FaTwitter /></a>
            <a href="aa.com" className="button" style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}><FaTumblr /></a>
          </div>
          <button className="button" style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }} onClick={changeButton}>New quote</button>
        </footer>
      </section>
      <a href="mimi.com">by hezag</a>
    </div>
  );
}
