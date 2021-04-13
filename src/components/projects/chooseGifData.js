import ChooseGif1 from '../../assets/ChooseGif1.gif';
import ChooseGif2 from '../../assets/ChooseGif2.gif';

const gifs = [
  ChooseGif1,
  ChooseGif2
];

const gifSelector = (gifs) => {
  const index = Math.floor(Math.random() * gifs.length);
  console.log(index);
  return gifs[index];
};

const currentGif = gifSelector(gifs);

export default {
  currentGif
};
