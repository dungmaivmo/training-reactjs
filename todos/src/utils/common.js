import { useEffect } from "react";
import * as Constants from '../constants/index';

export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export const getListTodos = (listTodos, statusListTodos) => {
  let list = [];
  if (statusListTodos === Constants.ALL) {
    list = listTodos
  }
  if (statusListTodos === Constants.ACTIVE) {
    list = listTodos.filter(todo => todo.completed === false);
  }
  if (statusListTodos === Constants.COMPLETED) {
    list = listTodos.filter(todo => todo.completed === true);
  }
  // if (statusListTodos === Constants.CLEAR_COMPLETED) {
  //   list = [];
  // }
  return list;
}


