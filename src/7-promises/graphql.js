import axios from 'axios';

const FUSION_API_KEY =
  'f7lpgA-9CrTHmAfNX0ApGygzqQpkiLzydl5hykYXUjxk5Ke8nAGfRZpTDtmVoI9ZO6dLQ9EFwrsjwK8iAZGz7EIt2tPNl7pW1iklnk3ujaDjWqTyzSbMPYqMvY1oYHYx';
const BASE_URL = 'https://api.yelp.com/v3/graphql';

const API_TIMEOUT = 5000;

const headers = {
  Authorization: `Bearer ${FUSION_API_KEY}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Accept-Encoding': 'gzip',
  'Accept-Language': 'en-US',
  'Cache-Control': 'no-cache',
};

const requestBody = JSON.stringify({
  query: `{
    search(
      term: 'Grocery',
      latitude: 37.78, 
      longitude: -122.406,
      radius: 16000,
      locale: 'en-US',
      limit: 20
      )
      {
        total
        business {
         id
        name
        distance
        rating
      }
    }
  }`,
});

const _axInstance = axios.create();
let config = {
  method: 'POST',
  url: BASE_URL,
  timeout: API_TIMEOUT,
  headers,
  data: requestBody,
};

const getData = async () => {
  try {
    const response = await _axInstance(config);
    console.log(response);
  } catch (error) {
    console.log('---- error:', error);
  }
};

getData();
