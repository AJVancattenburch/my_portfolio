<template>
  <section class="experience-wrapper">
    <div class="experience-content p-5">
      <h5 class="experience-subtitle text-uppercase text-secondary">{{ experienceData.subtitle }}</h5>
      <h1 class="experience-title text-primary">{{ experienceData.title }}.</h1>
      <div class="experience-container pt-5">
        <div
          v-for="experience in experienceData.experiences"
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
import experienceData from '../constants/Experience';

export default {
  setup() {
    return {
      experienceData,
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

@media (max-width: 768px) {
  .experience {
    &-wrapper {
      padding-block: 0;
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