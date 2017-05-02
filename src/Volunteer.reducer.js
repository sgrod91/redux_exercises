const INITIAL_STATE = {
  currentIndex: null,
  students: []
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'receive_students') {
    return Object.assign({}, state, {
      students: action.students
    });
  }
  if (action.type === 'pick') {
    let idx = Math.floor(action.value * state.students.length);
    return Object.assign({}, state, {
      currentIndex: idx
    });
  }
  return state;
}

export default reducer;
