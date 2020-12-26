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
    mileage: {
      distance: 100,
      unit: 'Km',
    },
  },
};

// ... and the reducer has this structure:
let newState = (action) => {
  const {
    mileage: { distance, unit },
  } = action.payload;
  return {
    ...state, // <-- combine whatever is in state currently with the rest below
    mileage: {
      distance, // <-- discard whatever props are in mileage currently and replace with distance and unit received from action.payload
      unit,
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
//   "passengers": 2,
//   "mileage": {
//       "distance": 100, <-- new value
//       "unit": "Km" <-- new value
//   }
// }

// if the action has this structure:
actionDispatched = {
  type: 'SET_DISTANCE',
  payload: {
    mileage: {
      distance: 100,
    },
  },
};

// ... and the reducer has this structure:
newState = (action) => {
  const {
    mileage: { distance },
  } = action.payload;
  return {
    ...state, // <-- combine whatever is in state currently with the rest below
    mileage: {
      distance, // <-- discard whatever props are in mileage currently and replace with distance received from action.payload
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
//   "passengers": 2,
//   "mileage": {
//       "distance": 100 <-- new value
//                       <-- unit is gone
//   }
// }
