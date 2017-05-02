let gameState={dragon: 20, hero: 10}

function reducer(state=gameState, action) {
  if (action.type === "flight") {
    var heroHealth = state.hero + 2;
    return Object.assign ({}, state, {
      hero: heroHealth
    })
  }
  if (action.type === "fightHero") {
    var heroHealth = state.hero - 5;
    return Object.assign ({}, state, {
      hero: heroHealth
    })
  }
  if (action.type === "fightDragon") {
    var dragonHealth = state.dragon -5;
    return Object.assign ({}, state, {
      dragon: dragonHealth
    })
  }
  return state;
}

export default reducer;
