<template>
  <section class="about-card purple-gradient">
    <div class="about-card-image">
      <img :src="card.imgSrc" :alt="card.imgAlt" :title="card.imgAlt" class="img-fluid" />
    </div>
    <div class="about-card-content">
      <h3 class="d-flex align-items-baseline about-card-title text-primary">{{ card.title }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.about-card {
  position: relative;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem #0000001a;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--green-pink-gradient);
    clip-path: polygon(100% 97%, 3% 97%, 0% 2%, 0% 100%);
    border-radius: 1rem;
    box-shadow: 1rem 1rem 1rem #00000080 inset;
    filter: blur(6px) brightness(0.9);
    mix-blend-mode: overlay;
    z-index: -1;
  }
  &:hover {
    transform: scale(1.05);
  }
  &-image {
    width: 90%;
    display: flex;
    position: absolute;
    top: 2rem;
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