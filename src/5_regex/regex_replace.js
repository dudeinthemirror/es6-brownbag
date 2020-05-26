// remove non words
let inStr = 'The ?    Brown !@# Fox ... Jumped = Over ?';
const outStr = inStr.replace(/\W/g, '');
console.log(outStr);

// remove extra spaces
inStr = 'The      Brown    Fox Jumped         ';
const outStr = inStr.replace(/\s+/g, ' ');
console.log(outStr);

// reverse words
inStr = 'Joe Sixpack';
let reversed = inStr.replace(
  /(\w+) (\w+)/,
  (match, name, surname) => `${surname} ${name}`
);
console.log(reversed);

inStr = 'Joe Sixpack The 3rd, Esq.';
reversed = inStr.replace(
  /(\w+) (\w+)/,
  (...match) => `${match[2]} ${match[1]}`
);
console.log(reversed);
