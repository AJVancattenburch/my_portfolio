<template>
  <div class="card mb-4 p-3 pb-0 education-item purple-gradient text-primary mb-3">
    <div class="d-flex align-items-center">
      <div :class="`${school.cssSelector}-img-container`" class="img-container">
        <img :src="school.icon" :alt="`Image of ${school.school_name} logo`" :class="`${school.cssSelector}-icon`" class="col-1 education-item-icon img-fluid rounded-circle" />
      </div>
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
    <div v-else class="d-flex flex-wrap justify-content-start pt-3 pe-5">
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
.img-container {
  width: 100%;
  height: 100%;
}
.wildlearner-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--text-primary);
  border-radius: 50%;
  .wildlearner-icon {
    position: relative;
    top: 0.25rem;
  }
}
.education-item-icon {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    padding-top: 3rem !important;
    margin-bottom: 4rem !important;
  }
  .education-item {
    &-icon:not(.wildlearner-icon) {
    position: absolute !important;
    top: -40px !important;
    left: 50%;
    transform: translateX(-50%);
    width: 75px;
    height: 75px;
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
  .wildlearner-img-container {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--text-primary) !important;
    border-radius: 50%;
    z-index: 1;
    width: 75px;
    height: 75px;
  }
  .wildlearner-title, .grasshopper-title {
    white-space: nowrap;
  }
}
</style>