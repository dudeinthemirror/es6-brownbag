const person = {
  firstName: 'Sarah',
  lastName: 'Kerrigan',
  nickName: 'Queen of Blades',
};

const { middleName = 'n/a', age = 0 } = person;
console.log('middleName = ', middleName);
console.log('age = ', age);

// use 'in' construct
// --------------------
// const hasFirstName = 'firstName' in person;
// console.log('firstName = ', hasFirstName ? person.firstName : 'n/a');
// const hasNickname = 'nickName' in person;
// console.log('nickname = ', hasNickname ? person.nickName : 'n/a');

// iterate through keys
// --------------------
// for (let key in person) {
//   console.log(`key: ${key}, value: ${person[key]}`);
// }
