<script setup>
import { buttonBorder } from '../assets/img/borders/_index'
import NavbarVertical from '../components/NavbarVertical.vue';
import { navLinks } from "../constants/_index.js";
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Education from '../components/Education.vue';
import Experience from '../components/Experience.vue';
import Projects from '../components/Projects.vue';
import Technologies from '../components/Technologies.vue';
import Feedback from '../components/Feedback.vue';
import Contact from '../components/Contact.vue';
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";

const navLink = computed(() => {
  let link;
  for (link in navLinks) {
    link = navLinks[link];
  }
  return link;
})

onMounted(() => {
  logger.log('Link:', navLink.value)
})

const isMobile = computed(() => window.innerWidth < 768);

</script>

<template>
  <section class="row d-flex justify-content-end page-wrapper">
    <resume-modal-button v-if="!isMobile" class="col-12 resume-modal-container d-flex justify-content-end">
      <a type="button" role="button" class="resume-modal-btn" data-bs-toggle="modal" data-bs-target="#resumeModal">
        <img src="../assets/img/my-resume.svg" title="Check out my resume!" alt="Modal button to view my resume" class="resume-modal-btn-icon" height="45" />
      </a>
    </resume-modal-button>
    <div class="col-2 vertical-nav-container d-none d-lg-block">
      <NavbarVertical :navLink="navLink" />
    </div>
    <div class="col-12 col-lg-10 page-container">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Technologies />
      <Projects />
      <Feedback />
      <Contact />
    </div>
  </section>
</template>

<style scoped lang="scss">
.page-wrapper {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  background: var(--black-transparent-gradient);
  .resume {
    &-modal-container {
      position: fixed;
      top: 15px;
      right: 5px;
      cursor: pointer;
      transition: transform 0.3s;
      z-index: 3;
    }
    &-modal-btn {
      position: relative;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      transition: transform 0.3s;
      display: flex;
      justify-content: center;
      &-icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        mix-blend-mode: overlay;
        filter: drop-shadow(0 0 3px var(--text-secondary));
        transition: 0.3s;
        &:active {
          mix-blend-mode: multiply;
          transform: scale(0.9);
          transition: 0.3s;
        }
      }
    }
    &-modal-btn::after {
      content: '';
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
      height: 60px;
      width: 60px;
      display: flex;
      background-image: url(/src/assets/img/borders/button-border.png);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      /* outline: 6px; */
      /* outline-style: solid; */
      box-shadow: inset 0 0 11px 9px #2a2047e9, inset 0 0 8px #00000080;
      border-radius: 50%;
      outline-offset: -4px;
      z-index: -1;
    }
  }

  .page-container {
    padding: 0;
    margin: 0;
    max-width: webkit-fill-available;
    background: var(--black-purple-radial-gradient);
  }

  .vertical-nav-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    max-width: webkit-fill-available;
    padding: 0;
    margin: 0;
    background: var(--black-purple-gradient);
    z-index: 3;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, #14101f 70%, #0f0d16 90%);
      box-shadow: 0 5px 3px 5px #0f0d16;
      z-index: 3;

    }
  }
}
</style>