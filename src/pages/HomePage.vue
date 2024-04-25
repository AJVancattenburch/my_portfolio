<template>
  <Hero />
  <div class="bg-main">
    <About />
    <Education />
    <Experience />
    <Technologies />
    <Projects />
    <Feedback />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Technologies from '../components/Technologies.vue'
import Feedback from '../components/Feedback.vue'

export default {
  setup() {

  },
  components: { Hero, About, Education, Experience, Projects, Technologies, Feedback }
}
</script>

<style scoped lang="scss">
.bg-main {
  position: relative;
  background: var(--black-purple-radial-gradient);
  height: 100%;
  width: 100%;
}
</style>