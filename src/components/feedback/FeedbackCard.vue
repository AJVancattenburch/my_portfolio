<script setup>
defineProps({
  testimonial: { type: Object, required: true },
});
</script>

<template>
  <div class="card feedback-card purple-gradient text-primary mb-5 me-3 ps-4 py-4">
    <div class="d-flex flex-column feedback-card-header">
      <h1 class="feedback-card-quotes fw-bold">"</h1>
      <div class="col-12 d-flex">
        <div class="col-9 d-flex flex-column">
          <h5 class="col-12 feedback-card-title text-secondary">{{ testimonial.designation }} @ {{ testimonial.company }}</h5>
          <h2 class="col-12 feedback-card-name">{{ testimonial.name }}</h2>
        </div>
        <div class="col-3 d-flex feedback-img-container mb-9">
          <img :src="testimonial.image" :alt="`Image of ${testimonial.name} logo`" class="feedback-card-picture img-fluid m-auto" />
        </div>
      </div>
    </div>
    <div class="pe-3">
      <hr />
    </div>
    <div class="pt-0 pb-3 pe-3 feedback-card-text-container">
      <p v-for="(paragraph, index) in testimonial.body" :key="index">{{ paragraph }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 350px;
  border-radius: 1rem;
  background-color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .feedback-card {
    &-header {
      height: 140px;
    }
    &-quotes {
      font-size: 4rem;
      line-height: 0.5;
    }
    &-picture {
      width: 75px;
      border-radius: 50%;
    }
    &-title {
      font-size: 1.1rem;
      font-weight: 700;
    }
    &-text-container {
      height: 300px;
      overflow-y: auto;
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
    box-shadow: inset 0 0 6px var(--purple);
    &-thumb {
      background: radial-gradient(circle at center, #F7F7F7dd 0%, #E7E7E799 70%, transparent);
      border-radius: 10px;
    }
    @media (max-width: 992px) {
      &-track-piece {
        margin-top: 0;
        border-radius: 10px;
      }
    }
  }
}
@media (min-width: 768px) {
  .feedback-img-container {
    position: relative;
    left: 40px;
  }
}

</style>