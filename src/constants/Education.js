import { codeworks, wildLearner, grasshopper } from '../assets/img/education/_index';

const educationData = {
  id: "education",
  title: "Education",
  subtitle: "What I have learned so far",
  schools: [
    {
      major: "Full Stack Software Development",
      school_name: "CodeWorks",
      icon: codeworks,
      date: "March 2023 - July 2023",
      cssSelector: "codeworks",
      points: [
        "Completed rigorous Full-Stack course that utilizes the latest industry standards in Software Development.",
        "Exposure to 1000+ hours of additional hands-on coding experience.",
        "Developed a robust foundation in software development through immersive projects, collaborative coding challenges, and in-depth coursework, fostering the ability to tackle complex coding tasks effectively and collaboratively.",
        "Worked in professional environments centered on real-world industry experience and creative problem solving.",
        "Voted Idaho's #1 Specialty School."
      ],
    },
    {
      major: "Earned Certifications",
      school_name: "Wild Learner",
      icon: wildLearner,
      date: "Jan 2023 - June 2023",
      cssSelector: "wildlearner",
      points: [
        "Intro to HTML5",
        "Intro to CSS3",
        "Intro to JavaScript",
        "Advanced JavaScript",
        "Intro to React.js",
        "Intro to Vue.js",
        "Intro to Node.js",
        "Intro to Express.js"
      ]
    },
    {
      major: "Earned Certifications",
      school_name: "Grasshopper",
      icon: grasshopper,
      date: "Jan 2022 - Jan 2023",
      cssSelector: "grasshopper",
      points: [
        "JS Fundamentals", "JS Fundamentals II", "JS Array Methods", "JS Animations", "JS Animations II"
      ],
    },
  ]
}
export default educationData;