import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Header from './Header';
import AddTodo from './AddTodo';



ReactDOM.render(
  <div className="container">
    {/* <LifeCycle /> */}
    <AddTodo />
  </div>,
  document.getElementById('root')
);
