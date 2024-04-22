<template>
  <section class="projects-wrapper">
    <div class="projects-content p-4">
      <h1 class="projects-title">Projects.</h1>
      <div class="col-12 projects-container d-flex justify-content-center">
        <div
          v-for="project in projects"
          :key="project.name"
          class="project-item"
        >
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "../constants/context/Projects.js";
import ProjectCard from "./ProjectCard.vue";

export default {
  setup() {
    return { projects };
  },
  components: {
    ProjectCard,
  },
}
</script>

<style scoped lang="scss">
.projects-wrapper {
  background-color: var(--color-primary);
  padding: 2rem 0;
}
</style>