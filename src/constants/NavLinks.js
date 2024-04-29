import { about, educationData, experienceData, projectData, technologyData, feedbacks, contactData } from '../constants/_index'

const navLinks = [
  {
    id: about.id,
    name: "About",
    title: "Who I am",
    isActive: false
  },
  {
    id: educationData.id,
    name: "Education",
    title: "What I have learned so far",
    isActive: false
  },
  {
    id: experienceData.id,
    name: "Experience",
    title: "What I have done so far",
    isActive: false
  },
  {
    id: projectData.id,
    name: "Projects",
    title: "What I have contributed to and created",
    isActive: false
  },
  {
    id: technologyData.id,
    name: "Tech",
    title: "What I have experience working with",
    isActive: false
  },
  {
    id: feedbacks.id,
    name: "Feedback",
    title: "What do others say?",
    isActive: false
  },
  {
    id: contactData.id,
    name: "Contact",
    title: "How to reach me",
    isActive: false
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