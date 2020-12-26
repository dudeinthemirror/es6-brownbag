// create new Map and populate it
const inMap = new Map();
inMap.set('k1', '111');
inMap.set('k2', '222');
inMap.set('k3', '333');
inMap.set('k4', '444');

// iterate through new Map
for (let [key, value] of inMap) {
  console.log(`key: ${key}, value: ${value}`);
}
// output:
// key: k1, value: 111
// key: k2, value: 222
// key: k3, value: 333
// key: k4, value: 444

// disection:
// of inMap <-- the Map built in iterator returns an array of arrays
// [
//   ['k1', '111']
//   ['k2', '222'],
//   etc.
// ]
// for (let ... of ...) <-- iterate through the array of arrays
// [key, value] <-- from each element (inner array), destructure element 0 into variable key, and element 1 into variable value

console.log(inMap);
// output:
// Map { 'k1' => '111', 'k2' => '222', 'k3' => '333', 'k4' => '444' }

// create new Set and populate it
const inArr = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5];
const inSet = new Set(inArr);

// iterate through new Set
for (let value of inSet.values()) {
  console.log(value);
}
// output:
// 1
// 2
// 3
// 4
// 5
