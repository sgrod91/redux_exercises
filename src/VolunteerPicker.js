import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Volunteer.reducer';

const STUDENTS = [
  'Todd',
  'Huiqi',
  'Andreea',
  'Jon',
  'Ning',
  'Carl',
  'Debra',
  'Blake',
  'Aaron',
  'Steven',
  'Justin',
  'James',
  'Ian',
  'Calder',
  'Julie',
  'Julie',
  'Amos'
];

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class StudentPicker extends React.Component {
  select(idx) {
    store.dispatch({
      type: 'select',
      index: idx
    });
  }
  render() {
    let state = store.getState();
    let student = state.students[state.currentIndex];
    let pick = () => store.dispatch({
      type: 'pick',
      value: Math.random()
    });
    return (
      <div>
        <button onClick={pick}>
          Pick
        </button>
        <br/>
        {student}
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <StudentPicker/>,
    document.getElementById('root')
  );
}
store.subscribe(display);
display();

store.dispatch({
  type: 'receive_students',
  students: STUDENTS
});
