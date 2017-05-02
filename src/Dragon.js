/*
1. The dragon will initially have 20 health.
2. The hero will initially have 10 health.
3. Display the health of the dragon and the hero.
4. The hero will chose to either
  a. fight - click the "Fight" button or
  b. flight - click the "Flight" button
5. If hero chooses to fight, it will either deal 5 damages to the dragon or the hero - randomly (50/50 chance).
6. If hero chooses flight, he will get 2 health back.
7. If the dragon's health goes below 0, dragon dies, player wins.
8. If the hero's health goes below 0, hero dies, player loses.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Dragon.reducer';

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class DragonGame extends React.Component {
  render() {
    let message;

    function fight() {
      let action = Math.random();
      if (action > 0.5) {
        // console.log("DragonFight");
        store.dispatch({
          type: "fightDragon"
        })
      } else {
        store.dispatch({
          type: "fightHero"
        })
      }


    }

    function flight() {
      console.log("Flight");
      store.dispatch({
        type:"flight"
      })

    }
    return (
      <div>
        <img src="http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg" width="300"/>
        <br/>
        <label>Dragon: {store.getState().dragon}</label>&nbsp;
        <label>Hero: {store.getState().hero}</label>
        <br/>
        {message}
        <br/>
        <button onClick={fight}>
          Fight
        </button>
        <button onClick={flight}>
          Flight
        </button>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <DragonGame/>,
    document.getElementById('root')
  );
}
store.subscribe(display);
display();
