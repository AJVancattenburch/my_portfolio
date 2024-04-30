import { generateId } from "../utils/GenerateId.js";
import { fullStack, vuejsReactjs, nodejsAspnetCore, webArtist } from '../assets/img/cardImg/_index';

export class AboutCard {
  constructor(data) {
    this.id = data.id || generateId();
    this.imgSrc = data.imgSrc;
    this.imgAlt = data.imgAlt;
    this.title = data.title;
  }
}

const about = {
  id: 'about',
  title: 'Overview',
  subtitle: 'Introduction',
  imgBg: '#383E56',
  cards: [
    {
      imgSrc: fullStack,
      imgAlt: 'Image of laptop with code blocks coming out of the screen',
      title: 'Full Stack Software Developer'
    },
    {
      imgSrc: vuejsReactjs,
      imgAlt: 'Image of Vue.js and React.js logos',
      title: 'Front-End Development'
    },
    {
      imgSrc: nodejsAspnetCore,
      imgAlt: 'Image of Node.js and ASP.NET Core logos',
      title: 'Back-End Development'
    },
    {
      imgSrc: webArtist,
      imgAlt: 'Colorful image of multiple tech icons with splashes of color',
      title: 'Web Artist'
    },
  ],
};

export default about;