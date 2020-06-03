import {
  addCalculateTotalMultiStopOLD,
  addCalculateTotalMultiStop,
} from './refactorAddCalculateTotalMultiStop';

import {
  MileageDataIsCompleteOLD,
  mileageDataIsComplete,
} from './refactorMileageDataIsComplete';

import { timer } from '../utils/timer';

// Run function 1 Million times
const run1MilTimes = (fn) => {
  for (let i = 0; i < 1000000; i++) {
    fn;
  }
};

// -------------
// benchmark: addCalculateTotalMultiStop
// -------------
let mileageData = {
  distance: 54,
  expense_mileage_vehicle_type: { id: 123 },
  expense_mileage_region: { id: 456 },
  passenger_count: 3,
};

let mileageConfig = {
  vehicleEnabled: true,
  regionEnabled: true,
  passengersEnabled: true,
  unit: 'Mi',
};

let result = timer(
  run1MilTimes(addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig))
);

console.table({ addCalculateTotalMultiStopOLD: result.nanoSecs });

result = timer(
  run1MilTimes(addCalculateTotalMultiStop(mileageData, mileageConfig))
);

console.table({ addCalculateTotalMultiStop: result.nanoSecs });

// -------------
// benchmark: mileageDataIsComplete
// -------------
mileageConfig = {
  vehicleEnabled: true,
  regionEnabled: true,
  passengersEnabled: true,
  requireAddress: false,
};

mileageData = {
  amount: '80.33',
  expense_category_id: 39,
  expense_date: '2020-05-19T00:00:00-07:00',
  expense_mileage_region: {
    id: 4,
    name: 'OH',
  },
  expense_mileage_vehicle_type: {
    id: 4,
    name: 'Car',
  },
  passenger_count: 2,
  distance: '53.54',
  start_address: 'San Francisco, CA, USA',
  end_address: 'Palo Alto, CA, USA',
};

result = timer(
  run1MilTimes(MileageDataIsCompleteOLD(mileageData, mileageConfig))
);

console.table({ MileageDataIsCompleteOLD: result.nanoSecs });

result = timer(run1MilTimes(mileageDataIsComplete(mileageData, mileageConfig)));

console.table({ mileageDataIsComplete: result.nanoSecs });

// Results:
/*
┌───────────────────────────────┬────────┐
│            (index)            │ Values │
├───────────────────────────────┼────────┤
│ addCalculateTotalMultiStopOLD │  7917  │
└───────────────────────────────┴────────┘
┌────────────────────────────┬────────┐
│          (index)           │ Values │
├────────────────────────────┼────────┤
│ addCalculateTotalMultiStop │  4540  │
└────────────────────────────┴────────┘
┌──────────────────────────┬────────┐
│         (index)          │ Values │
├──────────────────────────┼────────┤
│ MileageDataIsCompleteOLD │  3894  │
└──────────────────────────┴────────┘
┌───────────────────────┬────────┐
│        (index)        │ Values │
├───────────────────────┼────────┤
│ mileageDataIsComplete │  3179  │
└───────────────────────┴────────┘
*/
