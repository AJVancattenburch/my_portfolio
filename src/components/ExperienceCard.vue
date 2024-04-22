<template>
  <div class="card mb-2 p-3 pb-0 education-item purple-gradient text-primary mb-3">
    <div class="d-flex align-items-center">
      <img :src="experience.icon" :alt="`Image of ${experience.company_name} logo`" class="col-1 education-item-icon img-fluid rounded-circle" width="50" />
      <div class="col-11 flex-column ps-3">
        <div class="d-flex">
          <h4 class="education-item-title">@ {{ experience.company_name }}</h4>
          <p class="education-item-date ms-auto">{{ experience.date }}</p>
        </div>
        <h2 class="education-item-title">{{ experience.title }}</h2>
      </div>
    </div>
    <ul class="pt-4">
      <li v-for="(point, index) in experience.points" :key="index" class="fw-semibold">{{ point }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 75%;
}
</style>