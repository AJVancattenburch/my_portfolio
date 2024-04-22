<template>
  <div class="card mb-2 p-3 pb-0 education-item">
    <div class="d-flex align-items-center">
      <img :src="feedback.image" :alt="`Image of ${feedback.name} logo`" class="col-1 education-item-icon img-fluid" width="50" />
      <div class="col-11 flex-column ps-3">
        <div class="d-flex">
          <h4 class="education-item-date">{{ feedback.designation }}</h4>
          <p class="education-item-title ms-auto">@ {{ feedback.company }}</p>
        </div>
        <h2 class="education-item-title">{{ feedback.name }}</h2>
      </div>
    </div>
    <div class="pt-3">
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