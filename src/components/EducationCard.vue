<template>
  <div class="card mb-2 p-3 pb-0 education-item">
    <div class="d-flex align-items-center">
      <img :src="school.icon" :alt="`Image of ${school.school_name} logo`" class="col-1 education-item-icon img-fluid" width="50" />
      <div class="col-11 flex-column ps-3">
        <div class="d-flex">
          <h4 class="education-item-title">@ {{ school.school_name }}</h4>
          <p class="education-item-date ms-auto">{{ school.date }}</p>
        </div>
        <h2 class="education-item-title">{{ school.title }}</h2>
      </div>
    </div>
    <ul class="pt-3">
      <li v-for="(point, index) in school.points" :key="index">{{ point }}</li>
    </ul>
    <p class="education-item-text">{{ school.text }}</p>
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