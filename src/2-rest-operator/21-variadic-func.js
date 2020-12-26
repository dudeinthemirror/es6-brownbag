// variadic functions (aka "ellipsis argument" in C)
// collect first argument passed in parameter rate(number)
// then, collect all the rest of the arguments in parameter amounts(array)
function convertCurrency(rate, ...amounts) {
  return amounts.map((amount) => amount * rate);
}

let converted = convertCurrency(1.5, 10, 20, 30, 40, 50);
console.log('converted :', converted);
// output:
// converted : [ 15, 30, 45, 60, 75 ]

converted = convertCurrency(2, 30, 40, 50);
console.log('converted :', converted);
// output:
// converted : [ 60, 80, 100 ]
