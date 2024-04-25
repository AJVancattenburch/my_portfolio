<template>
  <div class="card mb-2 p-3 pb-0 education-item purple-gradient text-primary mb-3">
    <div class="d-flex align-items-center">
      <img :src="experience.icon" :alt="`Image of ${experience.company_name} logo`" :class="`${experience.cssSelector}-icon`" class="col-1 experience-item-icon img-fluid rounded-circle" width="50" />
      <div class="col-11 flex-column ps-3">
        <div class="d-flex">
        <div class="col-12 d-flex experience-item-details">
          <h4 :class="`${experience.cssSelector}-title`" class="col-9 experience-item-title">@ {{ experience.company_name }}</h4>
          <p class="col-2 experience-item-date ms-auto">{{ experience.date }}</p>
        </div>
        </div>
        <h2 class="experience-item-title">{{ experience.title }}</h2>
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
  border: 2px double var(--text-secondary);
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    padding-top: 3rem !important;
    margin-bottom: 4rem !important;
  }
  .experience-item {
    .usmg-icon {
      width: 75px;
    }
    &-icon {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    }
    &-details {
      flex-direction: column;
    }
    &-date {
      position: relative;
      width: 100%;
      color: var(--text-secondary);
      padding-left: 0 !important;
    }
    &-point {
      padding-left: 1rem !important;
    }
  }
  .usmg-icon {
    top: -20px;
  }
}
</style>