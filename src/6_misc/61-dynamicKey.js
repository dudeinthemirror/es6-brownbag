const dynamicKey = (i) => {
  return `key_${i}`;
};

let obj = {};

// construct object
for (let i = 0; i < 5; i++) {
  obj[dynamicKey(i)] = `value_${i}`;
}

console.log('obj :', obj);
obj : {
  key_0: 'value_0',
  key_1: 'value_1',
  key_2: 'value_2',
  key_3: 'value_3',
  key_4: 'value_4'
}

// extract key_3
console.log('key_3: ', obj['key_3']);
// output:
// key_3:  value_3

// extract key_3, alternative way
console.log('key_3: ', obj.key_3);
key_3:  value_3
