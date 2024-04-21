<template>
  <div class="card m-3 p-3 education-item">
    <h2 class="education-item-title">{{ school.title }}</h2>
    <ul v-for="(point, index) in school.points" :key="index">
      <li>{{ point }}</li>
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