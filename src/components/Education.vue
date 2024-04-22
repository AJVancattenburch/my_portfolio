<template>
  <section class="education-wrapper">
    <div class="education-content p-4">
      <h1 class="education-title">Education.</h1>
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
import { computed } from "vue";
import education from "../constants/context/Education.js";
import EducationCard from "./EducationCard.vue";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    return {
      education,
    };
  },
  components: { EducationCard },
};
</script>