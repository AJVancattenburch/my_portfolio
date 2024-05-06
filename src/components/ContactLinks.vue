<script setup>
import { ref } from 'vue';
import { footerLinks } from '../constants/FooterLinks';
import SVGGitHub from './SVGGithub.vue';
import SVGLinkedIn from './SVGLInkedIn.vue';

const githubLink = footerLinks.githubLink
const linkedInLink = footerLinks.linkedInLink

</script>

<template>
  <section class="link-container">
    <ul class=" d-flex flex-column justify-content-center">
      <li class="">
        <a :href="githubLink.external_url" target="_blank" rel="noopener noreferrer">
          <SVGGithub :fillColor="'var(--purple)'" :strokeColor="'var(--dark-purple)'" :strokeWidth="3" :strokeLinecap="'round'" :strokeLinejoin="'round'" :bgDark="'#18193F'" class="svg-brands svg-github" />
        </a>
      </li>
      <li class="mt-4">
        <a :href="linkedInLink.external_url" target="_blank" rel="noopener noreferrer">
          <SVGLinkedIn class="svg-brands svg-linkedin" />
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.link-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul li {
  position: relative;
  list-style: none;
  margin: 0 20px;
  padding: 10px 10px 20px 10px;
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
  &.svg-github {
    position: relative;
    top: -2.5px;
    left: -2.5px;
    width: 115px;
    height: 115px;
  }
}

li {
  &::after {
    content: '';
    position: absolute;
    border-top: 2px solid red;
    top: -10px;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover::after {
    background: #ff000099;
    animation: slideDownBg 0.3s ease-in-out;
  }

  &.svg-linkedin {
    height: 100px;
    width: 100px;
  }
}

@keyframes slideDownBg {
  0% {
    height: 1%;
  }
  100% {
    height: 100%;
    background: red !important;
  }
}
</style>