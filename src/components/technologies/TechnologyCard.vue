<script setup>
defineProps({
  technology: { type: Object, required: true }
});
</script>

<template>
  <section class="tech-card purple-gradient rounded-3 me-auto my-3">
    <div class="tech-card-content d-flex flex-column justify-content-center align-items-center p-3">
      <div class="tech-card-image">
        <img :src="technology.image" :alt="technology.name" class="tech-card-image img-fluid" width="50" />
      </div>
      <div class="tech-card-title">
        <h6 :class="technology.color" class="tech-card-title text-primary">{{ technology.name }}</h6>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.tech-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 6rem;
  border: 2px double var(--text-secondary);
}
</style>