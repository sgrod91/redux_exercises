// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.
function reducer(state = false, action) {
  if (action.type === 'flip') {
    if (action.value > 0.5) {
      return true;
    } else {
      return false;
    }
  } else {
    return state;
  }
}

export default reducer;
