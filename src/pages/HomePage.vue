<template>
  <div class="">
    <Hero />
    <About />
    <Education />
    <Experience />
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
import Feedback from '../components/Feedback.vue'

export default {
  setup() {

  },
  components: { Hero, About, Education, Experience, Projects, Feedback }
}
</script>

<style scoped lang="scss">
.test-block {
  height: 100vh;
  width: 100%;
}
</style>
