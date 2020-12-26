// create and populate new object
const inObj = {
  a: '111',
  b: '222',
  c: '333',
  d: '444',
  e: '555',
};

// iterate through object keys
for (let key in inObj) {
  console.log(key);
}
// output:
// a
// b
// c
// d
// e

// own props vs. inherited props
const getAllPropNames = (obj) => {
  let result = new Set();
  while (obj) {
    Object.getOwnPropertyNames(obj).map((p) => result.add(p));
    obj = Object.getPrototypeOf(obj);
  }
  return [...result];
};
console.table(getAllPropNames(inObj));
// output:
// ┌────────┬────────────────────────┐
// │ (index) │         Values           │
// ├────────┼────────────────────────┤
// │    0    │          'a'             │
// │    1    │          'b'             │ \
// │    2    │          'c'             │ these are own props
// │    3    │          'd'             │ |
// │    4    │          'e'             │
// │    5    │     'constructor'        │
// │    6    │   '__defineGetter__'     │
// │    7    │   '__defineSetter__'     │
// │    8    │    'hasOwnProperty'      │ \
// │    9    │   '__lookupGetter__'     │ these are inherited
// │   10    │   '__lookupSetter__'     │ from the
// │   11    │    'isPrototypeOf'       │ prototype
// │   12    │ 'propertyIsEnumerable'   │ |
// │   13    │       'toString'         │
// │   14    │       'valueOf'          │
// │   15    │      '__proto__'         │
// │   16    │    'toLocaleString'      │
// └────────┴────────────────────────┘

const inArr = [1, 2, 3, 4, 5];
console.table(getAllPropNames(inArr));
// output
// ┌─────────┬─────────────────────┐
// │ (index) │         Values         │
// ├─────────┼─────────────────────┤
// │    0    │          '0'           │
// │    1    │          '1'           │
// │    2    │          '2'           │
// │    3    │          '3'           │
// │    4    │          '4'           │
// │    5    │        'length'        │
// │    6    │     'constructor'      │
// │    7    │        'concat'        │
// │    8    │      'copyWithin'      │
// │    9    │         'fill'         │
// │   10    │         'find'         │
// │   11    │      'findIndex'       │
// │   12    │     'lastIndexOf'      │
// │   13    │         'pop'          │
// │   14    │         'push'         │
// │   15    │       'reverse'        │
// │   16    │        'shift'         │
// │   17    │       'unshift'        │
// │   18    │        'slice'         │
// │   19    │         'sort'         │
// │   20    │        'splice'        │
// │   21    │       'includes'       │
// │   22    │       'indexOf'        │
// │   23    │         'join'         │
// │   24    │         'keys'         │
// │   25    │       'entries'        │
// │   26    │        'values'        │
// │   27    │       'forEach'        │
// │   28    │        'filter'        │
// │   29    │         'flat'         │
// │   30    │       'flatMap'        │
// │   31    │         'map'          │
// │   32    │        'every'         │
// │   33    │         'some'         │
// │   34    │        'reduce'        │
// │   35    │     'reduceRight'      │
// │   36    │    'toLocaleString'    │
// │   37    │       'toString'       │
// │   38    │   '__defineGetter__'   │
// │   39    │   '__defineSetter__'   │
// │   40    │    'hasOwnProperty'    │
// │   41    │   '__lookupGetter__'   │
// │   42    │   '__lookupSetter__'   │
// │   43    │    'isPrototypeOf'     │
// │   44    │ 'propertyIsEnumerable' │
// │   45    │       'valueOf'        │
// │   46    │      '__proto__'       │
// └────────┴──────────────────────┘
