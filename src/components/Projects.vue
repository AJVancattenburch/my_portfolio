<template>
  <section class="projects-wrapper">
    <div class="projects-content p-4">
      <h5 class="projects-subtitle text-uppercase text-secondary">Work || Art || Passion</h5>
      <h1 class="projects-title text-primary">Projects.</h1>
      <div class="col-12 projects-container d-flex flex-wrap justify-content-center">
        <div
          v-for="project in projects"
          :key="project.name"
          class="col-12 col-md-4 d-flex flex-wrap project-item"
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
.projects {
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
}

@media (max-width: 768px) {
  .project-item {
    margin-bottom: 1rem;
  }
}
</style>