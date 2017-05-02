import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './HeadsTails.reducer';
import * as Redux from 'redux';
// Add code to create a store
let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


class HeadsTails extends React.Component {
  render() {
    let imageUrl;
    if (store.getState()) {
      imageUrl = 'images/quarter-front.png';
    } else {
      imageUrl = 'images/quarter-back.png';
    }

    let flip = () => store.dispatch({
      type: 'flip',
      value: Math.random()
    });
    return (
      <div>
        <img src={imageUrl}/>
        <button onClick={flip}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
function display() {
  ReactDOM.render(<HeadsTails/>, document.getElementById('root'));
}
display();
store.subscribe(display);
