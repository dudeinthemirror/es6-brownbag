const person = {
  firstName: 'Sarah',
  lastName: 'Kerrigan',
  nickName: 'Queen of Blades',
};

// extract props using destructuring
const { middleName = 'n/a', age = 0 } = person;
console.log('middleName = ', middleName);
console.log('age = ', age);
// output:
// middleName =  n/a
// age =  0

// lookup props using
// '<prop> in <object>' construct
const hasFirstName = 'firstName' in person;
console.log('firstName = ', hasFirstName ? person.firstName : 'n/a');
// output:
// firstName =  Sarah

const hasNickname = 'nickName' in person;
console.log('nickname = ', hasNickname ? person.nickName : 'n/a');
// output:
// nickname =  Queen of Blades

// iterate through keys
// using 'for... in...'
for (let key in person) {
  console.log(`key: ${key}, value: ${person[key]}`);
}
// output:
// key: firstName, value: Sarah
// key: lastName, value: Kerrigan
// key: nickName, value: Queen of Blades
