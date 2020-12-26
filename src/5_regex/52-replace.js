let inStr, outStr, reversed;
// remove non words
inStr = 'The ?    Brown !@# Fox ... Jumped = Over ?';
outStr = inStr.replace(/\W/g, '');
console.log(outStr);
// output:
// TheBrownFoxJumpedOver

// remove extra spaces
inStr = 'The      Brown    Fox Jumped         ';
outStr = inStr.replace(/\s+/g, ' ');
console.log(outStr);
// output:
// The Brown Fox Jumped

// reverse words
inStr = 'Joe Sixpack';
reversed = inStr.replace(
  /(\w+) (\w+)/,
  (match, name, surname) => `${surname} ${name}`
);
console.log(reversed);
// output:
// Sixpack Joe

// or, reverse words simplified
inStr = 'Joe Sixpack The 3rd, Esq.';
reversed = inStr.replace(
  /(\w+) (\w+)/,
  (...match) => `${match[2]} ${match[1]}`
);
console.log(reversed);
// output:
// Sixpack Joe The 3rd, Esq.
