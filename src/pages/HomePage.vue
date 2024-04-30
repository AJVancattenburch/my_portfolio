<template>
  <section class="row d-flex justify-content-end page-wrapper">
    <div class="col-2 vertical-nav-container d-none d-lg-block">
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
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  background: var(--black-transparent-gradient);
  overflow: hidden;

  .page-container {
    padding: 0;
    margin: 0;
    max-width: webkit-fill-available;
    background: var(--black-purple-radial-gradient);
  }

  .vertical-nav-container {
    position: fixed;
    top: 0;
    left: 0rem;
    height: 100vh;
    max-width: webkit-fill-available;
    padding: 0;
    margin: 0;
    background: var(--black-purple-gradient);
    z-index: 100;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent 75%, #181326 100%);
      z-index: 1;
    }
  }
}
</style>