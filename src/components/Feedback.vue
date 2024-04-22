<template>
  <section class="feedback-wrapper">
    <div class="feedback-content p-4">
      <h1 class="feedback-title">Testimonials.</h1>
      <div class="feedback-container">
        <div
          v-for="feedback in feedbacks"
          :key="feedback.name"
          class="feedback-item"
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