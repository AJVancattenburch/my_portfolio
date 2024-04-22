<template>
  <div class="card mb-2 p-3 pb-0 education-item purple-gradient text-primary mb-3">
    <div class="d-flex align-items-center">
      <img :src="school.icon" :alt="`Image of ${school.school_name} logo`" class="col-1 education-item-icon img-fluid" width="50" />
      <div class="col-11 flex-column ps-3">
        <div class="d-flex">
          <h2 class="education-item-title">{{ school.title }}</h2>
          <p class="education-item-date fw-semibold ms-auto">{{ school.date }}</p>
        </div>
        <h4 class="education-item-title text-secondary">@ {{ school.school_name }}</h4>
      </div>
    </div>
    <ul v-if="school.school_name === 'CodeWorks'" class="pt-3">
      <li v-for="(point, index) in school.points" :key="index" class="fw-semibold">{{ point }}</li>
    </ul>
    <div v-else class="d-flex justify-content-between pt-3 pe-5">
      <p v-for="(point, index) in school.points" :key="index" class="fw-semibold ps-5">{{ point }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    school: {
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