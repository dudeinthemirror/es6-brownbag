const expense_trip_segments = [
  { id: 1, start_location: 'San Francisco', end_location: 'Sunnyvale' },
  { id: 2, start_location: 'Sunnyvale', end_location: 'Palo Alto' },
  { id: 3, start_location: 'Palo Alto', end_location: 'Cupertino' },
];

for (const { start_location } of expense_trip_segments) {
  console.log(start_location);
}

// expense_trip_segments.map(({ start_location }) => console.log(start_location));
