<template>
  <section class="education-wrapper">
    <div class="education-content p-4">
      <h5 class="education-subtitle text-uppercase text-secondary">Where I have learned so far</h5>
      <h1 class="education-title text-primary">Education.</h1>
      <div class="education-container">
        <div
          v-for="school in education"
          :key="school.school_name"
          class="education-item"
        >
          <EducationCard :school="school" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import education from "../constants/context/Education.js";
import EducationCard from "./EducationCard.vue";

export default {
  setup() {
    return {
      education,
    };
  },
  components: { EducationCard },
};
</script>

<style scoped lang="scss">
.education {
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