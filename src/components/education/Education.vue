<script setup>
import educationData from '../../constants/Education';
import EducationCard from './EducationCard.vue';
</script>

<template>
  <section :id="educationData.id" class="education-wrapper">
    <div class="education-content p-5">
      <h5 class="education-subtitle text-uppercase text-secondary">{{ educationData.subtitle }}</h5>
      <h1 class="education-title text-primary">{{ educationData.title }}.</h1>
      <div class="education-container pt-5">
        <div
          v-for="school in educationData.schools"
          :key="school.school_name"
          class="education-item"
        >
          <EducationCard :school="school" />
        </div>
      </div>
    </div>
  </section>
</template>

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

@media (max-width: 768px) {
  .education {
    &-wrapper {
      padding-bottom: 0;
    }
    &-title {
      font-size: 2.5rem;
    }
    &-subtitle {
      font-size: 0.95rem;
    }
  }
}
</style>