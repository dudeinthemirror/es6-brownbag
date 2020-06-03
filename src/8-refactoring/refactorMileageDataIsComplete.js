// ---------------
// Existing
// ---------------
const MileageDataIsCompleteOLD = (mileageData, mileageConfig) => {
  const regionRequired = mileageConfig.regionEnabled;
  const vehicleRequired = mileageConfig.vehicleEnabled;
  const passengersRequired = mileageConfig.passengersEnabled;
  const addressRequired = mileageConfig.requireAddress;
  if (
    mileageData.expense_date &&
    mileageData.distance &&
    mileageData.distance.length > 0
  ) {
    if (
      (vehicleRequired
        ? mileageData.expense_mileage_vehicle_type &&
          mileageData.expense_mileage_vehicle_type.id
        : true) &&
      (passengersRequired
        ? mileageData.passenger_count !== undefined &&
          mileageData.passenger_count !== null
        : true) &&
      (regionRequired
        ? mileageData.expense_mileage_region &&
          mileageData.expense_mileage_region.id
        : true) &&
      (addressRequired
        ? mileageData.end_address &&
          mileageData.end_address.length > 0 &&
          mileageData.start_address &&
          mileageData.start_address.length > 0
        : true)
    ) {
      return true;
    }
  }
  return false;
};

// ---------------
// Refactored
// ---------------
const mileageDataIsComplete = (mileageData, mileageConfig) => {
  const {
    regionEnabled,
    vehicleEnabled,
    passengersEnabled,
    requireAddress,
  } = mileageConfig;

  const {
    expense_date,
    distance,
    expense_mileage_vehicle_type,
    expense_mileage_region,
    passenger_count,
    end_address,
    start_address,
  } = mileageData;

  const vehicleId = expense_mileage_vehicle_type?.id;
  const regionId = expense_mileage_region?.id;
  const hasPassengerCount =
    passenger_count !== undefined && passenger_count !== null ? true : false;

  if (expense_date && distance) {
    if (
      (vehicleEnabled ? !!vehicleId : true) &&
      (passengersEnabled ? !!passenger_count : true) &&
      (regionEnabled ? !!regionId : true) &&
      (requireAddress ? !!start_address && !!end_address : true)
    ) {
      return true;
    }
  }
  return false;
};

const mileageConfig = {
  vehicleEnabled: true,
  regionEnabled: true,
  passengersEnabled: true,
  requireAddress: false,
};

const mileageData = {
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

// console.log(MileageDataIsCompleteOLD(mileageData, mileageConfig));
// console.log(mileageDataIsComplete(mileageData, mileageConfig));

export { MileageDataIsCompleteOLD, mileageDataIsComplete };
