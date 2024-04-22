import { cwChallenges, threaditAI, gamePursuit } from "../../assets/img/projects/_index.js";
import { github } from "../../assets/img/icons/_index.js";

const projects = [
  {
    name: "CodeWorks Challenges",
    description: "An innovative platform designed to empower students and alumni of CodeWorks by providing carefully curated coding challenges tailored to enhance and showcase their skills to other users and potential employers with earned badges and rank. Our interactive front-end is built with Vue 3, a robust Node/Express back-end with Auth0 integration, MongoDB, and Mongoose, fostering seamless UX and efficient challenge moderation. Users can explore a variety of coding exercises, track their progress, and connect with an active community of fellow developers.",
    "tags": [
        {
            name: "vuejs",
            color: "green-text-gradient"
        },
        {
            name: "nodejs",
            color: "green-text-gradient"
        },
        {
            name: "expressjs",
            color: "green-text-gradient"
        },
        {
            name: "javascript",
            color: "yellow-text-gradient"
        },
        {
            name: "coding-challenges",
            color: "blue-text-gradient"
        },
        {
            name: "community",
            color: "orange-text-gradient"
        }
    ],
    image: cwChallenges,
    source_code_link: "https://github.com/codeworksacademy/challenges.codeworksacademy.com",
    source_code_icon: github
  },
  {
    name: "ThreadIt AI",
    description:
      "ThreadIt is a cutting-edge platform that allows users to upload images of clothing items and receive recommendations for other items that pair well with their selection.  The application is built using a React front-end and a Node.js/Express.js back-end that utilizes three.js to render realistic 3D models, and the OpenAI API to generate recommendations based on the user's input. ThreadIt AI is designed to provide a seamless and intuitive user experience, making it easy for creative fashion designers and enthusiasts to almost effortlessly explore new styles and discover fresh ideas.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
      {
        name: "openaiapi",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      }
    ],
    image: threaditAI,
    hyper_link: "https://threaditai.web.app",
    source_code_link: "https://github.com/AJVancattenburch/ThreadItAI",
    source_code_icon: github
  },
  {
    name: "Game Pursuit",
    description:
      "Fueled by a diverse set of skills and experiences, our team harnessed the power of Vue.js, Node.js, Express, and much more to architect a user-friendly hub for gamers to register, collect badges/sponsorships, flaunt their prowess, and initiate exhilarating tournaments that revolves around a token-based rewards system that encourages users to play more - and earn more. We also integrated a robust REST API and Postman to facilitate seamless communication between the front-end and back-end, and leveraged MongoDB to store user data and manage the application's state.",
    tags: [
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "violet-text-gradient",
      },
      {
        name: "postman",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: gamePursuit,
    source_code_link: "https://github.com/ChanthaKammer/capstone",
    source_code_icon: github
  }
];

export default projects;