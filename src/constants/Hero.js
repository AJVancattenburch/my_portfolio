import { generateId } from "../utils/GenerateId.js";
// @ts-ignore-next-line
import myImage from '../assets/img/my-image-cutout.png';

export class Skill {
  constructor(data) {
    this.id = data.id || generateId();
    this.hook = data.hook;
    this.name = data.name;
    this.textGradient = data.textGradient;
  }
}

const heroData = {
  id: "hero",
  myGreeting: "Hi, I'm ",
  myName: "Anthony",
  myTitle: "Full Stack Developer",
  myImageHero: myImage,
  mySkills: [
    { hook: "Proficiency in", name: "Data & API Integration", textGradient: "pink-text-gradient" },
    { hook: "Captivating", name: "User Experiences & Interfaces", textGradient: "green-text-gradient" },
    { hook: "Impactful", name: "Software Optimization", textGradient: "blue-text-gradient" },
  ],
}

export default heroData;