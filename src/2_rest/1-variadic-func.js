// variadic functions ("ellipsis argument" in C)
function convertCurrency(rate, ...amounts) {
  return amounts.map((amount) => amount * rate);
}

let converted = convertCurrency(1.5, 10, 20, 30, 40, 50);
console.log(converted);

converted = convertCurrency(2, 30, 40, 50);
console.log(converted);
