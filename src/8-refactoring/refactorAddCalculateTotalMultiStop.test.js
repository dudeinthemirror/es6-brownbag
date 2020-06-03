import {
  addCalculateTotalMultiStopOLD,
  addCalculateTotalMultiStop,
} from './refactorAddCalculateTotalMultiStop';

let mileageData;
let mileageConfig;

describe('test addCalculateTotalMultiStopOLD', () => {
  beforeEach(() => {
    mileageData = {
      distance: 54,
      expense_mileage_vehicle_type: { id: 123 },
      expense_mileage_region: { id: 456 },
      passenger_count: 3,
    };

    mileageConfig = {
      vehicleEnabled: true,
      regionEnabled: true,
      passengersEnabled: true,
      unit: 'Mi',
    };
  });

  test('should return the correct object', () => {
    const obj = addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          expense_mileage_region_id: 456,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      vehicleEnabled: false,
    };

    const obj = addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_region_id: 456,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      regionEnabled: false,
    };

    const obj = addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      passengersEnabled: false,
    };

    const obj = addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          expense_mileage_region_id: 456,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      vehicleEnabled: false,
      regionEnabled: false,
      passengersEnabled: false,
    };

    const obj = addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageData = {
      ...mileageData,
      expense_mileage_vehicle_type: {},
    };

    const obj = addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_region_id: 456,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageData = {
      ...mileageData,
      passenger_count: undefined,
    };

    const obj = addCalculateTotalMultiStopOLD({}, mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          expense_mileage_region_id: 456,
          total_distance_unit: 'Mi',
        },
      },
    });
  });
});

describe('test addCalculateTotalMultiStop', () => {
  beforeEach(() => {
    mileageData = {
      distance: 54,
      expense_mileage_vehicle_type: { id: 123 },
      expense_mileage_region: { id: 456 },
      passenger_count: 3,
    };

    mileageConfig = {
      vehicleEnabled: true,
      regionEnabled: true,
      passengersEnabled: true,
      unit: 'Mi',
    };
  });

  test('should return the correct object', () => {
    const obj = addCalculateTotalMultiStop(mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          expense_mileage_region_id: 456,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      vehicleEnabled: false,
    };

    const obj = addCalculateTotalMultiStop(mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: undefined,
          expense_mileage_region_id: 456,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      regionEnabled: false,
    };

    const obj = addCalculateTotalMultiStop(mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          expense_mileage_region_id: undefined,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      passengersEnabled: false,
    };

    const obj = addCalculateTotalMultiStop(mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          expense_mileage_region_id: 456,
          passenger_count: undefined,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageConfig = {
      ...mileageConfig,
      vehicleEnabled: false,
      regionEnabled: false,
      passengersEnabled: false,
    };

    const obj = addCalculateTotalMultiStop(mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: undefined,
          expense_mileage_region_id: undefined,
          passenger_count: undefined,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageData = {
      ...mileageData,
      expense_mileage_vehicle_type: {},
    };

    const obj = addCalculateTotalMultiStop(mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: undefined,
          expense_mileage_region_id: 456,
          passenger_count: 3,
          total_distance_unit: 'Mi',
        },
      },
    });
  });

  test('should return the correct object', () => {
    mileageData = {
      ...mileageData,
      passenger_count: undefined,
    };

    const obj = addCalculateTotalMultiStop(mileageData, mileageConfig);
    expect(obj).toEqual({
      expense_trip: {
        expense_trip_mileage: {
          total_distance: 54,
          expense_mileage_vehicle_type_id: 123,
          expense_mileage_region_id: 456,
          passenger_count: undefined,
          total_distance_unit: 'Mi',
        },
      },
    });
  });
});
