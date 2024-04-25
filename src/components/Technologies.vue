<template>
  <section class="technologies-wrapper">
    <div class="technologies-content p-5">
      <h5 class="technologies-subtitle text-uppercase text-secondary">Technologies I have worked with</h5>
      <h1 class="technologies-title text-primary">Technologies.</h1>
      <div class="col-12 technologies-container d-flex flex-wrap justify-content-center pt-5">
        <div
          v-for="technology in technologies"
          :key="technology.name"
          class="col-1 technology-item"
        >
          <TechnologyCard :technology="technology" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import technologies from "../constants/Technologies.js";

export default {
  setup() {
    return {
      technologies,
    };
  },
}
</script>

<style scoped lang="scss">
.technologies {
  &-wrapper {
    padding: 2rem 0;
  }
  &-subtitle {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  &-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
  }
  &-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>