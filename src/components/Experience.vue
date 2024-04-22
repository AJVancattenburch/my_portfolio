<template>
  <section class="experience-wrapper">
    <div class="experience-content p-4">
      <h5 class="experience-subtitle text-uppercase text-secondary">What I have done so far</h5>
      <h1 class="experience-title text-primary">Work Experience.</h1>
      <div class="experience-container">
        <div
          v-for="experience in experiences"
          :key="experience.company_name"
          class="experience-item"
        >
          <ExperienceCard :experience="experience" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import experiences from "../constants/context/Experience.js";

export default {
  setup() {
    return {
      experiences,
    };
  },
}
</script>

<style scoped lang="scss">
.experience {
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
    flex-direction: column;
  }
}
</style>