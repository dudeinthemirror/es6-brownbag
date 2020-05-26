const dynamicKey = (i) => {
  return `key_${i}`;
};

let obj = {};

for (let i = 0; i < 5; i++) {
  obj[dynamicKey(i)] = `value_${i}`;
}

console.log(obj);

console.log('key_3: ', obj['key_3']);
console.log('key_3: ', obj.key_3);
