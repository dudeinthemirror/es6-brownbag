export const getNanoSecTime = () => {
  var hrTime = process.hrtime();
  return hrTime[0] * 1000000000 + hrTime[1];
};

export const timer = fn => {
  const start = getNanoSecTime();
  const result = fn;
  const end = getNanoSecTime();
  const nanoSecs = end - start;
  return { result, nanoSecs };
};
