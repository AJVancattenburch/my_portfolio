<template>
  <div class="col-12 d-flex">
    <div class="col-4 col-lg-3 d-flex flex-column align-items-start">
      <NavBar />
    </div>
    <div class="col-8 col-lg-9 bg-main d-flex flex-column justify-content-center align-items-start">
      <Hero />
        <About />
        <Education />
        <Experience />
        <Technologies />
        <Projects />
        <Feedback />
        <Contact />
        <footer class="black-gradient text-light px-3">
          Designed By: Anthony Vancattenburch
        </footer>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/Navbar.vue';
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
    NavBar,
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
.bg-main {
  position: relative;
  background: var(--black-purple-radial-gradient);
  height: 100%;
  width: 100%;
}

footer {
  position: fixed;
  bottom: 0;
  display: grid;
  height: 32px;
  width: 100%;
}
</style>