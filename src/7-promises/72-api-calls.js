import axios from 'axios';

const baseURL = 'https://api.lyrics.ovh/v1/';

const getLyrics = async (artist, title) => {
  console.log(`Retrieving: ${artist}, ${title}`);
  const lyrics = await axios.get(`${baseURL}/${artist}/${title}`);
  return lyrics;
};

const getSongsSequential = async () => {
  try {
    let { data } = await getLyrics('Pink Floyd', 'Wish You Were Here');
    console.log(data);

    ({ data } = await getLyrics('Dire Straits', 'Private Investigations'));
    console.log(data);

    ({ data } = await getLyrics('Notting Hillbillies', 'Railroad Worksong'));
    console.log(data);

    ({ data } = await getLyrics('Queen', "'39"));
    console.log(data);
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

// getSongsSequential();
// output:
// Retrieving: Pink Floyd, Wish You Were Here
// {
//   lyrics: 'So, so you think you can tell Heaven from Hell,\r\n' +
//     'Blue skies from pain.\r\n' +
//     'Can you tell a green field from a cold steel rail? \n' +
// ...
// }
// Retrieving: Dire Straits, Private Investigations
// {
//  lyrics: "It's a mystery to me - the game commences\r\n" +
//     'for the usual fee - plus expenses\r\n' +
//    "confidential information, it’s in a dairy, this is my investigation, it's not a public inquiry\r\n" +
// ...
// }
// Retrieving: Notting Hillbillies, Railroad Worksong
// { lyrics: '' }
// Retrieving: Queen, '39
// {
// lyrics: "In the year of '39 assembled here the volunteers\r\n" +
//   'In the days when the lands were few\r\n' +
// ...
// }

const getSongsParallel = async () => {
  try {
    const [lyrics1, lyrics2, lyrics3, lyrics4] = await Promise.all([
      getLyrics('Pink Floyd', 'Wish You Were Here'),
      getLyrics('Dire Straits', 'Private Investigations'),
      getLyrics('Notting Hillbillies', 'Railroad Worksong'),
      // getLyrics('Bogus artist', 'Bogus title'),
    ]);
    console.log(lyrics1.data);
    console.log(lyrics2.data);
    console.log(lyrics3.data);
    // console.log(lyrics4.data);
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

// getSongsParallel();
// output:
// Retrieving: Pink Floyd, Wish You Were Here
// Retrieving: Dire Straits, Private Investigations
// Retrieving: Notting Hillbillies, Railroad Worksong
// {
//   lyrics: 'So, so you think you can tell Heaven from Hell,\r\n' +
//     'Blue skies from pain.\r\n' +
//     'Can you tell a green field from a cold steel rail? \n' +
//      ...
// }
// {
//   lyrics: "It's a mystery to me - the game commences\r\n" +
//     'for the usual fee - plus expenses\r\n' +
//     "confidential information, it’s in a dairy, this is my investigation, it's not a public inquiry\r\n" +
//      ...
// }
// { lyrics: '' }
