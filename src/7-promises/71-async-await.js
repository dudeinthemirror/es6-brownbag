const getUsers = () => {
  console.log('Retrieving users ...');
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(['Bob', 'Jane', 'Wilfred', 'Imogene']);
    }, 4000);
  });
};

const getReports = () => {
  console.log('Retrieving reports ...');
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(['report1', 'report2', 'report3', 'report4']);
    }, 2000);
  });
};

const getAvatars = () => {
  console.log('Retrieving avatars ...');
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject(new Error('Invalid URL'));
    }, 2000);
  });
};

// call all 3 async functions in sequence
const getAllSequential = async () => {
  try {
    const users = await getUsers();
    console.log('Got users: ', users);
    const reports = await getReports();
    console.log('Got reports: ', reports);
    const avatars = await getAvatars();
    console.log('Got avatars: ', avatars);
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

// getAllSequential();
// output:
// Retrieving users ...
// Got users:  [ 'Bob', 'Jane', 'Wilfred', 'Imogene' ]
// Retrieving reports ...
// Got reports:  [ 'report1', 'report2', 'report3', 'report4' ]
// Retrieving avatars ...
// Error:  Invalid URL

// call all 3 async functions in parallel
const getAllParallel = async () => {
  try {
    const [users, reports, avatars] = await Promise.all([
      getUsers(),
      getReports(),
      getAvatars(),
    ]);
    console.log('Got users: ', users);
    console.log('Got reports: ', reports);
    console.log('Got avatars: ', avatars);
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

getAllParallel();
// output:
// Retrieving users ...
// Retrieving reports ...
// Retrieving avatars ...
// Error:  Invalid URL

// NOTE: when invoked in parallel, if one fails, the whole batch fails
