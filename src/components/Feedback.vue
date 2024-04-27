<template>
  <section class="feedbacks-wrapper">
    <div class="feedbacks-content p-5">
      <h5 class="feedbacks-subtitle text-uppercase text-secondary">{{ feedbacks.subtitle }}</h5>
      <h1 class="feedbacks-title text-primary">{{ feedbacks.title }}.</h1>
      <div class="feedback-container d-flex flex-wrap">
        <div
          v-for="testimonial in feedbacks.testimonials"
          :key="testimonial.name"
          class="col-12 col-md-6 col-xl-4 feedback-item"
        >
          <FeedbackCard :testimonial="testimonial" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import feedbacks from "../constants/Feedbacks.js";

export default {
  setup() {
    return {
      feedbacks,
    };
  },
}
</script>

<style scoped lang="scss">
.feedbacks {
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
.feedback-container {
  .feedback-item {
    height: 100%;
    border-radius: 1rem;
    transition: all 0.3s;
    &:hover {
      filter: brightness(1.1);
    }
  }
}

@media (max-width: 768px) {
  .feedbacks {
    &-title {
      font-size: 2.5rem;
    }
    &-subtitle {
      font-size: 0.95rem;
    }
  }
}
</style>