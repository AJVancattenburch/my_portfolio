<script setup>
import { footerLinks } from "../constants/FooterLinks.js";
import SVGGitHub from "./SVGGithub.vue";
import SVGLinkedIn from "./SVGLInkedIn.vue";

const githubLink = footerLinks.githubLink
const linkedInLink = footerLinks.linkedInLink
</script>

<template>
  <ul class="d-flex flex-column justify-content-center">
    <li>
      <a :href="githubLink.external_url" target="_blank" rel="noopener noreferrer">
        <SVGGitHub class="svg-brands svg-github" />
      </a>
    </li>
    <li>
      <a :href="linkedInLink.external_url" target="_blank" rel="noopener noreferrer">
        <SVGLinkedIn class="svg-brands svg-linkedin" />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
}

ul {
  position: relative;
  display: flex;
}
ul li {
  position: relative;
  list-style: none;
  margin: 0 20px;
  cursor: pointer;
}
ul li a {
  text-decoration: none;
}
ul li a .svg-brands {
  font-size: 6em;
  color: #222;
  width: 100px;
  height: 100px;
  border-radius: 1rem;
  margin-top: 2rem;
  &.svg-github {
    position: relative;
    left: -15px;
    width: 115px;
    height: 115px;
  }
}
ul li svg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  font-size: 6em;
  height: 0;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

ul li:nth-child(1) svg::before {
  background-image: linear-gradient(45deg, 
    #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,
    #bc1888 100%);
  -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  border-bottom: 4px solid #dc2743;
}
ul li:nth-child(2) svg::before {
  content: "";
  color: #25D366;
  border-bottom: 4px solid #25D366;
}
ul li:nth-child(3) svg::before {
  content: "";
  color: #1DA1F2;
  border-bottom: 4px solid #1DA1F2;
}
ul li:hover svg::before {
  height: 100%;
  z-index: 1000;
}
</style>