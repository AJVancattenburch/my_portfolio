<template>
  <section class="col-12 d-flex justify-content-end page-wrapper">
    <div class="col-2 vertical-nav-container d-none d-lg-flex">
      <NavbarVertical />
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

<script>
import NavbarVertical from '../components/NavbarVertical.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Education from '../components/Education.vue';
import Experience from '../components/Experience.vue';
import Projects from '../components/Projects.vue';
import Technologies from '../components/Technologies.vue';
import Feedback from '../components/Feedback.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    NavbarVertical,
    Hero,
    About,
    Education,
    Experience,
    Projects,
    Technologies,
    Feedback,
    Contact
  }
}
</script>

<style scoped lang="scss">
.page-wrapper {
  position: relative;
  background: #000000;
  overflow: hidden;

  .page-container {
    padding: 0;
    margin: 0;
    background: var(--black-purple-radial-gradient);
  }

  .vertical-nav-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: min-content;
    padding: 0;
    margin: 0;
    background: var(--black-gradient);
    z-index: 100;
    overflow: hidden;
  }
}
</style>