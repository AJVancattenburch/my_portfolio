<template>
  <section class="row d-flex justify-content-end page-wrapper">
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

<script setup>
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


</script>

<style scoped lang="scss">
.page-wrapper {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  background: var(--black-transparent-gradient);

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