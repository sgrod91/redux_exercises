import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

let store = Redux.createStore(reducer);

class Counter extends React.Component {
  // add() {
  //   store.dispatch({
  //     type: 'add'
  //   });
  // }
  // subtract() {
  //   store.dispatch({
  //     type: 'subtract'
  //   });
  // }
  render() {
    let count = store.getState();
    let add = () => store.dispatch({
      type: 'add'
    });
    let subtract = () => store.dispatch({
      type: 'subtract'
    });
    return (
      <div>
        <button onClick={add}>-</button>
        {count}
        <button onClick={subtract}>+</button>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
