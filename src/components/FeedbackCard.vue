<template>
  <div class="card mb-2 ps-4 py-4 testimonial-item purple-gradient text-primary me-3">
    <div class="d-flex flex-column testimonial-item-header mb-3">
      <h1 class="testimonial-item-quotes fw-bold">"</h1>
      <div class="col-12 d-flex">
        <div class="col-9 d-flex flex-column">
          <h5 class="col-12 testimonial-item-title text-secondary">{{ testimonial.designation }} @ {{ testimonial.company }}</h5>
          <h2 class="col-12 testimonial-item-name">{{ testimonial.name }}</h2>
        </div>
        <div class="col-3 d-flex mb-9">
          <img :src="testimonial.image" :alt="`Image of ${testimonial.name} logo`" class="col-2 testimonial-item-picture img-fluid" />
        </div>
      </div>
    </div>
    <div class="pe-3">
      <hr />
    </div>
    <div class="pt-0 pb-3 pe-3 testimonial-item-text-container">
      <span v-for="(paragraph, index) in testimonial.body" :key="index">{{ paragraph }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  height: 350px;
  border-radius: 1rem;
  background-color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .testimonial-item {
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
      &::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
        box-shadow: inset 0 0 6px var(--purple);
        &-thumb {
          background: var(--white-gradient);
          border-radius: 10px;
        }
      }
    }
  }
}

</style>