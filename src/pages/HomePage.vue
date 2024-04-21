<template>
  <div class="">
    <Hero />
    <About />
    <Education />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Education from '../components/Education.vue'

export default {
  setup() {

  },
  components: { Hero, About, Education }
}
</script>

<style scoped lang="scss">
.test-block {
  height: 100vh;
  width: 100%;
}
</style>
