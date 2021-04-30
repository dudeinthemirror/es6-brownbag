import axios from 'axios';

const API_KEY =
  'f7lpgA-9CrTHmAfNX0ApGygzqQpkiLzydl5hykYXUjxk5Ke8nAGfRZpTDtmVoI9ZO6dLQ9EFwrsjwK8iAZGz7EIt2tPNl7pW1iklnk3ujaDjWqTyzSbMPYqMvY1oYHYx';

const yelpGQL = axios.create({
  url: 'https://api.yelp.com/v3/graphql',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-type': 'application/json',
  },
  method: 'POST',
});

const _body = ` 
    {
      total
      business {
       id
      name
      distance
      rating
      review_count
      price
      phone
      photos
      hours {
        open {
          start
          end
          day
        }
        is_open_now
      }
      categories {
        title
        alias
      }
      reviews {
        text
        time_created
        rating
        user {
          name
          image_url
        }
      }
      coordinates {
        latitude
        longitude
      }
      location {
        address1
        city
      }
      }
    }`;

export const searchBusinessesByLocation = (term, location) => {
  const query = {
    query: `{ 
      search(
      term: "${term}",
      location: "${location}"
      radius: 16000,
      locale: 'en-US',
      limit: 20
      )
      ${_body}
    }`,
  };

  console.log('---- query is:', query);

  return JSON.stringify(query);
};

searchBusinessesByLocation('grocery', 'palo alto');

// export const searchBusinessesByCoords = (term, latitude, longitude) => {
//   const query =
//   return JSON.stringify({
//     query: `{
//     search(
//       term: "${term}",
//       latitude: ${latitude},
//       longitude: ${longitude},
//       radius: 16000,
//       locale: 'en-US',
//       limit: 20
//       )
//       ${_body}
//     }`,
//   });
// };

yelpGQL({
  data: searchBusinessesByLocation('grocery', 'palo alto'),
}).then(({ data }) => {
  const businesses = data.data.search.business;
  businesses.forEach((b) => {
    console.log('Name: ', b.name);
  });
});

// yelpGQL({
//   data: searchBusinessesByCoords('grocery', 37.785834 - 122.40641),
// }).then(({ data }) => {
//   const businesses = data.data.search.business;
//   businesses.forEach((b) => {
//     console.log('Name: ', b.name);
//   });
// });
