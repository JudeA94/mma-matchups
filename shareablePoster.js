const { createCanvas, loadImage } = require('canvas');
const fetch = require('node-fetch');

const eventName = 'UFC 286';
let posterImageURL = '';

const title = eventName.replace(/\s+/g, '_');
const url = `https://en.wikipedia.org/api/rest_v1/page/media-list/${title}?redirect=false`;

fetch(url, {
  method: 'GET',
  headers: {
    Accept:
      'application/json; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/Media/1.3.1"',
  },
})
  .then((response) => response.json())
  .then((data) => {
    posterImageURL = data.items[0].srcset[2].src;

    // Get the event poster image
    const posterUrl = posterImageURL;
    loadImage(posterUrl).then((posterImage) => {
      // Create a canvas element
      const canvas = createCanvas(posterImage.width, posterImage.height);

      // Draw the event poster on the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(posterImage, 0, 0);

      // Add text elements for the user's picks
      const userPicks = ['Pick 1', 'Pick 2', 'Pick 3'];
      ctx.font = '24px Arial';
      ctx.fillStyle = '#ffffff';
      userPicks.forEach((pick, index) => {
        ctx.fillText(pick, 100, 100 + index * 30);
      });

      // Export the canvas as an image
      const image = canvas.toDataURL('image/png');

      console.log(image);
    });
  })
  .catch((error) => {
    console.error(error);
  });
