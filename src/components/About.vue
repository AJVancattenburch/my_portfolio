<script setup>
import about from '../constants/About';
</script>

<template>
  <section ref="about" :id="about.id" class="about-wrapper">
    <div class="about-content p-5">
      <h5 class="about-subtitle text-uppercase text-secondary">{{ about.subtitle }}</h5>
      <h1 class="about-title text-primary">{{ about.title }}.</h1>
      <p class="about-text text-primary">
        Driven by my personal journey and guided by a deep sense of purpose as a developer, I am always excited to contribute with a dynamic and forward-thinking team. I bring <span class="highlight">perseverance</span>, <span class="highlight">integrity</span>, and a <span class="highlight">rapid learning ability</span> to every project, striving to create impactful software solutions that push boundaries and drive positive change.
      </p>
      <div class="about-card-container d-flex flex-wrap align-items-center">
        <div
          v-for="card in about.cards"
          :key="card.title"
          class="about-card-item py-3"
        >
          <AboutCard :card="card" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  &-wrapper {
    width: 100%;
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
  &-text {
    width: 75%;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
  }
}
.highlight {
  color: #00D8FF;
  font-weight: 600;
}

@media (max-width: 768px) {
  .about {
    &-title {
      font-size: 2.5rem;
    }
    &-subtitle {
      font-size: 0.95rem;
    }
    &-text {
      width: 100%;
    }
    &-content {
      padding-bottom: 1rem !important;
    }
    &-card-container {
      padding: 0 !important;
    }
  }
}
</style>