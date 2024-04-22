<template>
  <div class="col-4 project-item">
    <div class="project-item-content">
      <img
        :src="project.image"
        :alt="project.name"
        class="project-item-image img-fluid"
      />
      <h2 class="project-item-title">{{ project.name }}</h2>
      <p class="project-item-description">{{ project.description }}</p>
      <div class="project-item-links">
        <a
          :href="project.source_code_link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-item-link"
        >
          <img src="../assets/img/icons/github.png" alt="GitHub" />
        </a>
      </div>
      <span v-for="tag in project.tags" :key="tag.name" :class="tag.color" class="pe-3">#{{ tag.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.project-item {
  width: 100%;
  background-color: var(--color-primary);
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  margin: 1rem;
  overflow: hidden;
  &-content {
    padding: 1rem;
  }
  &-image {
    border-radius: 0.5rem;
    max-width: 100%;
  }
  &-title {
    color: var(--color-white);
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: center;
  }
  &-description {
    color: var(--color-white);
    font-size: 1rem;
    margin: 0 0 1rem;
    text-align: center;
  }
  &-links {
    display: flex;
    justify-content: center;
  }
  &-link {
    background-color: var(--color-white);
    border-radius: 0.5rem;
    display: inline-block;
    margin: 0 0.5rem;
    padding: 0.5rem;
    img {
      display: block;
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>