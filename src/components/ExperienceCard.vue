<template>
  <div class="card mb-4 p-3 company-card purple-gradient text-primary mb-3">
    <div class="d-flex align-items-center">
      <div :class="`${company.cssSelector}-img-container`" class="img-container">
        <img :src="company.icon" :alt="`Image of ${company.company_name} logo`" :class="`${company.cssSelector}-icon`" class="col-1 company-icon img-fluid rounded-circle" width="50" />
      </div>
      <div class="col-11 flex-column ps-3">
        <div class="d-flex">
        <div class="col-12 d-flex company-details">
          <h4 :class="`${company.cssSelector}-title`" class="col-9 company-title">@ {{ company.company_name }}</h4>
          <p class="col-2 company-date ms-auto">{{ company.date }}</p>
        </div>
        </div>
        <h2 class="company-title">{{ company.title }}</h2>
      </div>
    </div>
    <ul class="pt-4">
      <li v-for="(point, index) in company.points" :key="index" class="fw-semibold">{{ point }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    company: {
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
  .img-container {
    width: 100%;
    height: 100%;
    .company-icon {
      width: 100%;
    }
  }
  /* CHANGING THE BACKGROUND COLOR OF YOUR 'FREELANCE DEVELOPER' BRAND/LOGO (desktop view): Currently set to black. Change the #000 hex color to whatever you want your background to be for your logo. If you don't want a background color, simply delete the below `.myLogo-icon` styles below */
  .myLogo-icon {
    background: radial-gradient(circle, #000 46%, transparent 49%);
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    padding-top: 3rem !important;
    margin-bottom: 4rem !important;
    .img-container {
      width: 100%;
      height: 100%;
      .company-icon {
        width: 60px;
      }
      /* CHANGING THE BACKGROUND COLOR OF YOUR 'FREELANCE DEVELOPER' BRAND/LOGO (mobile view): Currently set to black. Change the #000 hex color to whatever you want your background to be for your logo. If you don't want a background color, simply delete the below `.myLogo-icon` styles below */
      .myLogo-icon {
        background: radial-gradient(circle, #000 58%, transparent 61%);
        height: 60px;
        width: 60px;
        border-radius: 50%;
      }
    }
  }
  .company-card {
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