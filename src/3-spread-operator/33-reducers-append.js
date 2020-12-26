// using the spread operator in
// real life application: reducers

// if the initial state is:
const state = {
  id: 123,
  passengers: 2,
  mileage: {
    distance: 58.4,
    unit: 'Mi',
  },
};

// ... and the action being dispatched has this structure:
let actionDispatched = {
  type: 'SET_MILEAGE',
  payload: {
    passengers: 4,
    mileage: {
      unit: 'Km',
    },
  },
};

// ... and the reducer structure is:
const newState = (action) => {
  const {
    passengers,
    mileage: { unit },
  } = action.payload;
  return {
    ...state, // <-- combine whatever is in state currently with the rest below
    passengers, // the new passengers received from action.payload
    mileage: {
      ...state.mileage, // <-- combine whatever is in state.mileage currently with
      unit, // the new unit received from action.payload
    },
  };
};

// the resulting newState is:
console.log('state before: ', JSON.stringify(state, null, '    '));
console.log(
  'state after: ',
  JSON.stringify(newState(actionDispatched), null, '    ')
);
// output:
// state before:  {
//   "id": 123,
//   "passengers": 2,
//   "mileage": {
//       "distance": 58.4,
//       "unit": "Mi"
//   }
// }
// state after:  {
//   "id": 123,
//   "passengers": 4,  // <-- new value from action.payload
//   "mileage": {
//       "distance": 58.4, // <-- existing prop preserved
//       "unit": "Km" // <-- new value from action.payload
//   }
// }
