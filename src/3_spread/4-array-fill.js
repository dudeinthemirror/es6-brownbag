let arr = [...Array(5).keys()];

console.log('arr :', arr);

arr = [...Array(26)].map((v, i) => String.fromCharCode(i + 65));

console.log('arr :', arr);
