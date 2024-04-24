<template>
  <section class="feedback-wrapper">
    <div class="feedback-content p-5">
      <h1 class="feedback-title">Testimonials.</h1>
      <div class="feedback-container d-flex flex-wrap">
        <div
          v-for="feedback in feedbacks"
          :key="feedback.name"
          class="col-12 col-md-6 col-xl-4 feedback-item"
        >
          <FeedbackCard :feedback="feedback" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import feedbacks from "../constants/context/Feedbacks.js";

export default {
  setup() {
    return {
      feedbacks,
    };
  },
}
</script>

<style scoped lang="scss">
.feedback-wrapper {
  background-color: var(--bg-secondary);
  .feedback-content {
    max-width: 100%;
    .feedback-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 2rem;
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
  }
}
</style>