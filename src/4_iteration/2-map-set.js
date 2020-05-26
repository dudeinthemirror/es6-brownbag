// ---------------------
// iterate Map
const inMap = new Map();
inMap.set('k1', '111');
inMap.set('k2', '222');
inMap.set('k3', '333');
inMap.set('k4', '444');

for (let [key, value] of inMap) {
  console.log(`key: ${key}, value: ${value}`);
}
console.log(inMap);

// ---------------------
// iterate Set
// const inArr = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5];
// const inSet = new Set(inArr);

// for (let value of inSet.values()) {
//   console.log(value);
// }
