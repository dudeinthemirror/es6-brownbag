const expenseTripSegments = [
  { id: 1, start_location: 'San Francisco', end_location: 'Sunnyvale' },
  { id: 2, start_location: 'Sunnyvale', end_location: 'Palo Alto' },
  { id: 3, start_location: 'Palo Alto', end_location: 'Cupertino' },
];

// iterate through each element of array  expenseTripSegments
// for each element(which is an object in this case), extract prop
for (const { start_location } of expenseTripSegments) {
  console.log('start_location :', start_location);
}
// output:
// start_location : San Francisco
// start_location : Sunnyvale
// start_location : Palo Alto

// use map to create a new array with just one prop extracted
// from each element of the array
const startLocations = expenseTripSegments.map(({ start_location }) => {
  return start_location;
});

console.log('startLocations:', startLocations);
// output:
// startLocations: [ 'San Francisco', 'Sunnyvale', 'Palo Alto' ]

// Old way:
// for (const segment of expenseTripSegments) {
//   console.log('start_location :', segment.start_location);
// }

// const startLocations = expenseTripSegments.map((segment) => {
//   return segment.start_location;
// });
