<script setup>
defineProps({
  card: { type: Object, required: true },
});
</script>

<template>
  <section class="green-pink-gradient">
    <div class="about-card purple-gradient">
      <div class="about-card-img-container">
        <img :src="card.imgSrc" :alt="card.imgAlt" :title="card.imgAlt" class="img-fluid about-card-img" />
      </div>
      <div class="about-card-content">
        <h3 class="d-flex align-items-baseline about-card-title text-primary">{{ card.title }}</h3>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.green-pink-gradient {
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  &:is(.green-pink-gradient):hover {
    transition: 0.3s ease-in-out;
    filter: brightness(1.2);
  }
}
.about-card {
  position: relative;
  width: 20rem;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black-purple-radial-gradient);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem #0000001a;
  transition: 0.3s ease-in-out;
  z-index: 1;
  cursor: pointer;
  &:hover {
    transform: scale(1.008);
  }
  &-img-container {
    width: 90%;
    height: 50%;
    display: flex;
    position: absolute;
    top: 1rem;
  }
  &-img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
  &-content {
    position: absolute;
    bottom: 1rem;
    padding: 1.5rem;
    text-align: center;
  }
  &-title {
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>