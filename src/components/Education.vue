<template>
  <section class="education-wrapper">
    <div class="education-content">
      <h1 class="education-title">Education.</h1>
      <div class="education-container">
        <div
          v-for="school in education"
          :key="school.id"
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

export default {
  setup() {
    return {
      education,
      codeworks: computed(() => education.find((edu) => edu.id === "codeworks")),
    };
  },
  components: { EducationCard },
};
</script>