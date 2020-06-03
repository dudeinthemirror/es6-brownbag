const mileageData = {
  distance: 54,
  expense_mileage_vehicle_type: { id: 123 },
  expense_mileage_region: { id: 456 },
  passenger_count: 3,
};

const mileageConfig = {
  vehicleEnabled: true,
  regionEnabled: true,
  passengersEnabled: true,
  unit: 'Mi',
};

// ---------------
// Existing
// ---------------
function addCalculateTotalMultiStopOLD(hash, mileageData, mileageConfig) {
  const expense_trip_mileage = {};
  const expense_trip = {};
  expense_trip_mileage.total_distance = parseFloat(mileageData.distance);
  if (mileageConfig.vehicleEnabled) {
    expense_trip_mileage.expense_mileage_vehicle_type_id =
      mileageData.expense_mileage_vehicle_type.id;
  }
  if (mileageConfig.regionEnabled) {
    expense_trip_mileage.expense_mileage_region_id =
      mileageData.expense_mileage_region.id;
  }
  if (mileageConfig.passengersEnabled) {
    expense_trip_mileage.passenger_count = mileageData.passenger_count;
  }
  expense_trip_mileage.total_distance_unit = mileageConfig.unit;
  expense_trip.expense_trip_mileage = expense_trip_mileage;
  hash.expense_trip = expense_trip;
  return hash;
}

// console.log(addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig));

// ---------------
// Refactored
// ---------------
const addCalculateTotalMultiStop = (mileageData, mileageConfig) => {
  const {
    vehicleEnabled,
    regionEnabled,
    passengersEnabled,
    unit: total_distance_unit,
  } = mileageConfig;
  const {
    distance,
    expense_mileage_vehicle_type: { id: expense_mileage_vehicle_type_id },
    expense_mileage_region: { id: expense_mileage_region_id },
    passenger_count,
  } = mileageData;

  return {
    expense_trip: {
      expense_trip_mileage: {
        total_distance: parseFloat(distance),
        expense_mileage_vehicle_type_id: vehicleEnabled
          ? expense_mileage_vehicle_type_id
          : undefined,
        expense_mileage_region_id: regionEnabled
          ? expense_mileage_region_id
          : undefined,
        passenger_count: passengersEnabled ? passenger_count : undefined,
        total_distance_unit,
      },
    },
  };
};

// console.log(addCalculateTotalMultiStop(mileageData, mileageConfig));

export { addCalculateTotalMultiStopOLD, addCalculateTotalMultiStop };
