<script setup>
import { computed } from "vue";
import { footerLinks } from '../constants/FooterLinks';

const isMobile = computed(() => window.innerWidth < 768);

const ghLink = footerLinks.githubLink;
const linkedInLink = footerLinks.linkedInLink
</script>

<template>
  <ul :class="isMobile ? 'flex-row' : 'flex-column'" class="position-relative d-flex justify-content-center align-items-center">
    <li><a :href="linkedInLink.external_url" :title="linkedInLink.title"><i class="mdi-brands mdi mdi-linkedin"></i></a></li>
    <li><a :href="ghLink.external_url" :title="ghLink.title"><i class="mdi-brands mdi mdi-github"></i></a></li>
</ul>
</template>

<style scoped lang="scss">
ul li {
  position: relative;
  list-style: none;
  margin: 10px;
  cursor: pointer;
}

ul li a {
  text-decoration: none;
}

ul li a .mdi-brands {
  font-size: 6em;
  color: #222;
}

ul li a::before {
  font-family: "Material Design Icons";
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  font-size: 6em;
  height: 0;
  overflow: hidden;
  transition: 0.8s ease-in-out;
}

ul li:nth-child(1) a::before {
  content: "\F033B";
  background-image: linear-gradient(#155CDE, #2EB5F0);
  -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  border-bottom: 4px solid #155CDE;
}

ul li:nth-child(2) a::before {
  content: "\F02A4";
  background-image: linear-gradient(var(--purple), var(--dark-purple));
  -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  border-bottom: 4px solid var(--purple);
}

ul li:hover a::before {
  animation: revealGradientChange 0.8s ease-in forwards;
}

@keyframes revealGradientChange {
  100% {
    height: 90%;
    filter: hue-rotate(360deg) saturate(200%);
  }
}
</style>