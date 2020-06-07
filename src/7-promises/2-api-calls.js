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
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

// getSongsSequential();

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

const getSongsParallelDynamicList = async () => {
  try {
    const params = [
      { artist: 'Pink Floyd', title: 'Wish You Were Here' },
      { artist: 'Dire Straits', title: 'Private Investigations' },
      { artist: 'Notting Hillbillies', title: 'Railroad Worksong' },
    ];

    let promiseList = [];
    for (let line of params) {
      promiseList.push(
        'getLyrics(line.artist, line.title).then((lyrics) => console.log(lyrics.data))'
      );
    }

    Promise.all(promiseList.map((v) => eval(v)));
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

getSongsParallelDynamicList();
