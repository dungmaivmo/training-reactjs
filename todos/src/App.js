import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Todos } from './components/Todos';
import { FooterList } from './components/FooterList';
import { Footer } from './components/Footer';
import { getListTodos } from './utils/common';
import './css/index.css';

import { useSelector, useDispatch } from 'react-redux';
import { getDataApi, getNumberItemLeft } from './actions/todos';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.todos.data);
  const status = useSelector(state => state.todos.status);

  useEffect(() => {
    dispatch(getDataApi());
  }, []);

  useEffect(() => {
    dispatch(getNumberItemLeft());
  }, [data]);

  return (
    <>
      <section className="App">
        <Header />
        <Todos listTodos={getListTodos(data, status)} />
        {
          data.length > 0 &&
          <FooterList />
        }
      </section>
      <Footer />
    </>
  );
}

export default App;
