import {
  MileageDataIsCompleteOLD,
  mileageDataIsComplete,
} from './refactorMileageDataIsComplete';

let mileageConfig;
let mileageData;

describe('test MileageDataIsCompleteOLD', () => {
  beforeEach(() => {
    mileageConfig = {
      vehicleEnabled: true,
      regionEnabled: true,
      passengersEnabled: true,
      requireAddress: true,
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
  });

  test('should return true', () => {
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_mileage_region: {},
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_mileage_vehicle_type: {},
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      passenger_count: undefined,
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      start_address: undefined,
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      end_address: '',
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_date: undefined,
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_date: undefined,
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return true', () => {
    mileageConfig = {
      ...mileageConfig,
      vehicleEnabled: false,
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });

  test('should return true', () => {
    mileageConfig = {
      ...mileageConfig,
      regionEnabled: false,
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });

  test('should return true', () => {
    mileageConfig = {
      ...mileageConfig,
      requireAddress: false,
    };
    const res = MileageDataIsCompleteOLD(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });
});

describe('test mileageDataIsComplete', () => {
  beforeEach(() => {
    mileageConfig = {
      vehicleEnabled: true,
      regionEnabled: true,
      passengersEnabled: true,
      requireAddress: true,
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
  });

  test('should return true', () => {
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_mileage_region: {},
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_mileage_vehicle_type: {},
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      passenger_count: undefined,
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      start_address: undefined,
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      end_address: '',
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_date: undefined,
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return false', () => {
    mileageData = {
      ...mileageData,
      expense_date: undefined,
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(false);
  });

  test('should return true', () => {
    mileageConfig = {
      ...mileageConfig,
      vehicleEnabled: false,
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });

  test('should return true', () => {
    mileageConfig = {
      ...mileageConfig,
      regionEnabled: false,
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });

  test('should return true', () => {
    mileageConfig = {
      ...mileageConfig,
      requireAddress: false,
    };
    const res = mileageDataIsComplete(mileageData, mileageConfig);
    expect(res).toEqual(true);
  });
});
