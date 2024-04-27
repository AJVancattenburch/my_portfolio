import { ql, myLogo, codeworks, imag } from "../assets/img/company/_index.js";

const experienceData = {
  title: "Work Experience",
  subtitle: "What I have done so far...",
  experiences: [
    {
      title: "Software Test Engineer",
      company_name: "QualityLogic",
      icon: ql,
      date: "Feb 2023 - Present",
      cssSelector: "ql",
      points: [
        "TESTING: I have experience in manual testing, automated testing, and performance testing.",
        "TEAM COLLABORATION: I have worked closely with developers, product managers, and other QA specialists to ensure that the product is of the highest quality.",
        "PROBLEM-SOLVING: I have a strong ability to identify and solve problems quickly and efficiently.",
        "ATTENTION TO DETAIL: I have a keen eye for detail and am able to spot even the smallest of bugs.",
        "COMMUNICATION: I have excellent communication skills and am able to clearly and effectively communicate with all members of the team."
      ]
    },
    {
      title: "Freelance Software Developer",
      company_name: "Self-Employed",
      icon: myLogo,
      date: "Aug 2023 - Present",
      cssSelector: "myLogo",
      points: [
        "DEVELOPMENT: Building and maintaining applications collaboratively; both Full Stack and Front End.",
        "COLLABORATIVE COMMUNICATION: Descriptive and articulate nature with a clear understanding of project scopes and requirements, making it easy to bridge the gap between technical and non-technical team members.",
        "CREATIVE MARKETING: Experience with social media and marketing techniques, executing novel methods through Graphic Design and user engagement strategies that are proven to produce results."
      ]
    },
    {
      title: "Software Developer Intern",
      company_name: "CodeWorks",
      icon: codeworks,
      date: "Aug 2023 - Feb 2024",
      cssSelector: "cw",
      points: [
        "SPECIAL PROJECTS: Part of a hand-selected team of developers that has worked and continues to work on special projects for CodeWorks.",
        "CODE TALKS & LECTURES: Frequently collaborate with the CEO and other staff in helping set up networking events as well as being a speaker for code talks and lectures to help students understand some of the more in-depth concepts of web development.",
        "ALUMNI CHALLENGE APP: Led the creation of a comprehensive full-stack MEVN app for alumni, facilitating coding challenges with a point, badge, and rewards earning system. Users can engage in various challenges, from mini tasks to full-stack projects."
      ]
    },
    {
      title: "Sales / Route Manager",
      company_name: "Intermountain Auto Glass",
      icon: imag,
      date: "June 2016 - Dec 2020",
      cssSelector: "imag",
      points: [
        "TEAM LEADERSHIP: I was responsible for managing a team of 5-10 employees. I was in charge of scheduling and ensuring that all employees were performing at a high level.",
        "TEAM COLLABORATION: I worked closely with staff to ensure mental health and wellness.",
        "PARTNERSHIP DEVELOPMENT: Developed and maintained relationships with our partners. Responsible for ensuring that all partners were satisfied with their experience.",
        "INVENTORY MANAGEMENT: Oversaw inventory for the office and shop, ensuring timely access to essential resources, demonstrating keen organizational skills.",
        "TRANSFERRABLE SKILLS: These experiences contributed to my ability problem-solve, communicate effectively, and work collaboratively with others."
      ]
    }
  ]
};

export default experienceData;