<template>
  <div class="card mb-2 p-3 pb-0 education-item purple-gradient text-primary mb-3">
    <div class="d-flex align-items-center">
      <img :src="school.icon" :alt="`Image of ${school.school_name} logo`" :class="`${school.cssSelector}-icon`" class="col-1 education-item-icon img-fluid" width="50" />
      <div class="col-11 flex-column ps-3">
        <div class="d-flex education-item-details">
          <h2 :class="`${school.cssSelector}-title`" class="education-item-title">{{ school.title }}</h2>
          <p class="education-item-date fw-semibold ms-auto ps-3">{{ school.date }}</p>
        </div>
        <h4 class="education-item-title text-secondary">@ {{ school.school_name }}</h4>
      </div>
    </div>
    <ul v-if="school.school_name === 'CodeWorks'" class="pt-3">
      <li v-for="(point, index) in school.points" :key="index" class="fw-semibold">{{ point }}</li>
    </ul>
    <div v-else class="d-flex flex-wrap justify-content-between pt-3 pe-5">
      <p v-for="(point, index) in school.points" :key="index" class="fw-semibold ps-5 education-item-point">{{ point }}</p>
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
  position: relative;
  width: 75%;
  border: 2px double var(--text-secondary);
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    padding-top: 3rem !important;
    margin-bottom: 4rem !important;
  }
  .education-item {
    &-icon {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 75px;
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
  .wildlearner-icon {
    width: 150px;
  }
  .grasshopper-icon {
    width: 175px;
  }
  .wildlearner-title, .grasshopper-title {
    white-space: nowrap;
  }
}
</style>