const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');

(async () => {
  await imagemin(['images/Jan/*.{jpg,png}'], {
    destination: 'images/Jan/optimized',
    plugins: [
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8] })
    ]
  });

  console.log('Images optimized');
})();
