<template>
  <div class="card mb-2 ps-4 py-4 education-item purple-gradient text-primary">
    <div class="d-flex align-items-center">
      <div class="col-11 flex-column ps-3">
        <div class="d-flex">
          <h4 class="education-item-date">{{ feedback.designation }}</h4>
          <p class="education-item-title ms-auto">@ {{ feedback.company }}</p>
        </div>
        <div class="d-flex mb-5">
          <h2 class="col-10 education-item-title">{{ feedback.name }}</h2>
          <img :src="feedback.image" :alt="`Image of ${feedback.name} logo`" class="col-2 education-item-icon img-fluid" width="50" />
        </div>
      </div>
    </div>
    <div class="pt-0 pb-3 pe-3 education-item-text-container">
      <p v-for="(paragraph, index) in feedback.testimonial" :key="index">{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feedback: {
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
  .education-item {
    &-icon {
      border-radius: 50%;
    }
    &-text-container {
      padding-top: 5rem;
      height: 300px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
        background-color: var(--purple);
        &-thumb {
          background-color: var(--text-primary);
          border-radius: 10px;
        }
      }
    }
  }
}

</style>