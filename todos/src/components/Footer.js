import React from 'react';

export const Footer = props => {
  return (
    <footer className="footer">
      <p>Double-click to edit a todo</p>
      <p>Created by
                <a href="http://taylorhakes.com">Taylor Hakes</a>
                 and <a href="http://blogue.jpmonette.net">Jean-Philippe Monette</a>
        <br></br>(Special thanks to <a href="https://github.com/lhorie/">Leo Horie</a>)
                  </p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  );
};
