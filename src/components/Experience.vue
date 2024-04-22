<template>
  <section class="experience-wrapper">
    <div class="experience-content p-4">
      <h1 class="experience-title">Education.</h1>
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