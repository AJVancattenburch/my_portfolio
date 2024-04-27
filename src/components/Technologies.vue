<template>
  <section class="technologies-wrapper">
    <div class="technologies-content p-5">
      <h5 class="technologies-subtitle text-uppercase text-secondary">{{ technologyData.subtitle }}</h5>
      <h1 class="technologies-title text-primary">{{ technologyData.title }}.</h1>
      <div class="col-10 col-lg-12 technologies-container d-flex flex-wrap justify-content-start pt-5">
        <div
          v-for="technology in technologyData.technologies"
          :key="technology.name"
          class="col-3 col-lg-2 col-xl-1 technology-item"
        >
          <TechnologyCard :technology="technology" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import technologyData from '../constants/Technologies';

export default {
  setup() {
    return {
      technologyData,
    };
  },
}
</script>

<style scoped lang="scss">
.technologies {
  &-wrapper {
    overflow: hidden;
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

@media (max-width: 768px) {
  .technologies {
    &-title {
      font-size: 2.5rem;
    }
    &-subtitle {
      font-size: 0.95rem;
    }
  }
}
</style>