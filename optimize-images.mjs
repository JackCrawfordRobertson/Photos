import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';

(async () => {
  const files = await imagemin(['images/Jan/*.{jpg,png}'], {
    destination: 'images/Jan/optimized',
    plugins: [
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8] })
    ]
  });

  console.log('Images optimized:', files);
})();
