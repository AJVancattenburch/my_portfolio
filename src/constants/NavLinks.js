import { about, educationData, experienceData, projectData, technologyData, feedbacks, contactData } from '../constants/_index'

const navLinks = [
  {
    id: about.id,
    name: "About",
    title: "Who I am",
    primary: true
  },
  {
    id: educationData.id,
    name: "Education",
    title: "What I have learned so far",
    primary: true
  },
  {
    id: experienceData.id,
    name: "Experience",
    title: "What I have done so far",
    primary: true
  },
  {
    id: projectData.id,
    name: "Projects",
    title: "What I have contributed to and created",
    primary: true
  },
  {
    id: technologyData.id,
    name: "Tech",
    title: "What I have experience working with",
    primary: true
  },
  {
    id: feedbacks.id,
    name: "Feedback",
    title: "What do others say?",
    primary: true
  },
  {
    id: contactData.id,
    name: "Contact",
    title: "How to reach me",
    primary: true
  },
  // {
  //   name: "Github",
  //   title: "View my activity on Github",
  //   external_url: "https://github.com/AJVancattenburch"
  // },
  // {
  //   name: "LinkedIn",
  //   title: "Connect with me on LinkedIn",
  //   external_url: "https://linkedin.com/in/anthonyvancattenburch/"
  // }
]

export default navLinks