// real life application - reducers
const state = {
  id: 123,
  passengers: 2,
  mileage: {
    distance: 58.4,
    unit: 'Mi',
  },
};

// SCENARIO 1 - replace
let action = {
  type: 'SET_MILEAGE',
  payload: {
    mileage: {
      distance: 100,
      unit: 'Km',
    },
  },
};

let newState = () => {
  const {
    mileage: { distance, unit },
  } = action.payload;
  return {
    ...state,
    mileage: {
      distance,
      unit,
    },
  };
};

console.log('state before: ', state);
console.log('state after: ', newState());

// new action
action = {
  type: 'SET_DISTANCE',
  payload: {
    mileage: {
      distance: 100,
    },
  },
};

// same reducer (replace)
newState = () => {
  const {
    mileage: { distance },
  } = action.payload;
  return {
    ...state,
    mileage: {
      distance,
    },
  };
};

// console.log('state after: ', newState());

// SCENARIO 2 - append
// new reducer (append)
newState = () => {
  const {
    mileage: { distance },
  } = action.payload;
  return {
    ...state,
    mileage: {
      ...state.mileage,
      distance,
    },
  };
};

// console.log('state after: ', newState());
