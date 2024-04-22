<template>
  <div class="col-4 project-item purple-gradient">
    <div class="project-item-content d-flex flex-column">
      <img
        :src="project.image"
        :alt="project.name"
        class="project-item-image img-fluid"
      />
      <h2 class="project-item-title">{{ project.name }}</h2>
      <div class="scroll-box">
        <p class="project-item-description">{{ project.description }}</p>
      </div>
      <div class="project-item-links">
        <a
          :href="project.source_code_link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-item-link"
        >
          <img :src="project.source_code_icon" alt="GitHub" />
        </a>
      </div>
      <div class="d-flex flex-wrap">
        <span v-for="tag in project.tags" :key="tag.name" :class="tag.color" class="pe-1">#{{ tag.name }}</span>
      </div>
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
  position: relative;
  width: 95%;
  color: var(--text-off-white);
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--black-gradient);
    z-index: -1;
  }
  &-content {
    padding: 1rem;
  }
  &-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: left center;
    border: 1.5px var(--text-off-white) inset;
    border-radius: 0.5rem;
  }
  &-title {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  &-description {
    font-size: 1rem;
    margin: 0 0 1rem;
    height: 250px;
    overflow-y: auto;
  }
  &-links {
    display: flex;
    justify-content: center;
  }
  &-link {
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
::-webkit-scrollbar {
  width: 0.5rem;
}
</style>