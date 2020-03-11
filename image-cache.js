const axios = require('axios');

const getimage = async (url) => {
  const img = await axios.get(url);
  return img.headers['content-length'];
}

const imgcache = async (n, arr) => {
  let images = new Map();
  try {
    for await (let url of arr) {
      if (images.has(url)) {
        console.log(`${url} IN_CACHE ${images.get(url).size }`);
        continue;
      }

      const size = await getimage(url);
      images.set(url, { size });
      console.log(`${url} DOWNLOADED ${size}`);
      continue;
    }
  }
  catch (err) {
    console.log('Some error happened');
  }
}

(async () => {
  await imgcache(3, [
    'http://i.imgur.com/xGmX4h3.jpg',
    'http://i.imgur.com/IUfsijF.jpg',
    'http://i.imgur.com/xGmX4h3.jpg'
  ]);
})();
