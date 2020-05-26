const person = {
  firstName: 'Sarah',
  lastName: 'Kerrigan',
  nickName: 'Queen of Blades',
};

const middleName = person.middle_name || 'n/a';
console.log('middleName = ', middleName);
const age = person.age || 0;
console.log('age = ', age);

// const hasFirstName = 'firstName' in person;
// console.log('firstName = ', hasFirstName ? person.firstName : 'n/a');
// const hasNickname = 'nickName' in person;
// console.log('nickname = ', hasNickname ? person.nickName : 'n/a');

// iterate through keys
// for (key in person) {
//   console.log(`key: ${key}, value: ${person[key]}`);
// }
