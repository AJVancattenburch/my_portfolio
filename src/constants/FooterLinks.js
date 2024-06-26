import { github, linkedin, websiteTemplate } from "../assets/img/icons/_index.js";

const githubLink = {
  name: "Github",
  title: "View my activity on Github",
  imgSrc: github,
  external_url: "https://github.com/AJVancattenburch"
};

const linkedInLink = {
  name: "LinkedIn",
  title: "Connect with me on LinkedIn",
  imgSrc: linkedin,
  external_url: "https://linkedin.com/in/anthonyvancattenburch/"
};

const templateLink = {
  name: "My Portfolio Template",
  title: "Like my custom template? Click here to fork, then seamlessly add your own content & theme!",
  imgSrc: websiteTemplate,
  external_url: "https://github.com/AJVancattenburch/my_portfolio/tree/main"
}

export const footerLinks = { githubLink, linkedInLink, templateLink };