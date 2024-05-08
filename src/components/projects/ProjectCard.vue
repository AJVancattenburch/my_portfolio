<script setup>
defineProps({
  project: { type: Object, required: true }
});
</script>

<template>
  <div class="project-item purple-gradient me-4 pb-4">
    <div class="project-item-content d-flex flex-column">
      <img
        :src="project.image"
        :alt="project.name"
        :class="`${project.cssSelector}-image project-item-image img-fluid`"
      />
      <div class="project-item-link">
        <a
          :href="project.source_code_link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-item-link"
        >
          <img :src="project.source_code_icon" alt="GitHub" class="project-item-icon bg-dark rounded-circle" :title="`Source code link for '${project.name}'`" />
        </a>
      </div>
      <h2 class="project-item-title">{{ project.name }}</h2>
      <div class="scroll-box">
        <p class="project-item-description">{{ project.description }}</p>
      </div>
      
      <div class="d-flex flex-wrap footer-box">
        <span class="col-12 d-flex justify-content-center align-items-center">
          <i class="mdi mdi-chevron-down text-secondary fs-5"></i>
        </span>
        <span v-for="tag in project.tags" :key="tag.name" :class="tag.color" class="pe-1">#{{ tag.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-item {
  position: relative;
  width: 100%;
  height: 37.5rem;
  color: var(--text-primary);
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
    border: 1.5px var(--text-primary) inset;
    border-radius: 0.5rem;
  }
  &-title {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  &-description {
    font-size: 1rem;
    margin: 0 0 1rem;
    height: 215px;
    overflow-y: auto;
  }
  &-link {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-purple);
  }
  &-icon {
    width: 2rem;
    height: 2rem;
    border: 2px double var(--text-primary);
    transition: 0.3s;
    &:hover {
      filter: brightness(1.4);
      rotate: 10deg;
      transition: 0.3s;
    }
  }
  .mdi-chevron-down {
    position: relative;
    top: -0.6rem;
  }
}
::-webkit-scrollbar {
  display: none;
}
.grant-ready-image {
  object-position: center !important;
}
</style>