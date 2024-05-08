<script setup>
defineProps({
  company: { type: Object, required: true },
});
</script>

<template>
  <div class="company-card purple-gradient text-primary p-3 mb-4">
    <div class="d-flex flex-column flex-lg-row align-items-center ">
      <div :class="`${company.cssSelector}-img-container`" class="col-12 col-lg-1 img-container">
        <img :src="company.icon" :alt="`Image of ${company.company_name} logo`" :class="`${company.cssSelector}-icon`" class="company-icon img-fluid rounded-circle" width="75" />
      </div>
      <div class="col-12 col-lg-11 flex-column ps-3">
        <div class="col-12 d-flex flex-column flex-lg-row company-details">
          <h4 :class="`${company.cssSelector}-title`" class="col-9 company-title">@ {{ company.company_name }}</h4>
          <span class="col-12 col-lg-2 company-date pb-1 ms-auto">{{ company.date }}</span>
        </div>
        <h2 class="company-title">{{ company.title }}</h2>
      </div>
    </div>
    <ul class="pt-4">
      <li v-for="(point, index) in company.points" :key="index" class="fw-semibold">{{ point }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.company-card {
  width: 75%;
  border: 2px double var(--text-secondary);
  .img-container {
    position: relative;
    .company-icon {
      width: 75px;
    }
  }
  /* CHANGING THE BACKGROUND COLOR OF YOUR 'FREELANCE DEVELOPER' BRAND/LOGO (desktop view): Currently set to black. Change the #000 hex color to whatever you want your background to be for your logo. If you don't want a background color, simply delete the below `.myLogo-icon` styles below */
  .myLogo-icon {
    background: radial-gradient(circle, #000 46%, transparent 49%);
    border-radius: 50%;
  }
}

@media (max-width: 768px) {
  .company-card {
    width: 100%;
    padding-top: 3rem !important;
    margin-bottom: 4rem !important;
    .company-title {
      margin-top: 0 !important;
      font-size: 1.3rem;
    }

    .img-container {
      position: relative;
      top: -85px;
      width: 75px;
      height: 100%;
      .company-icon {
        position: absolute;
        width: 100%;
      }
      /* CHANGING THE BACKGROUND COLOR OF YOUR 'FREELANCE DEVELOPER' BRAND/LOGO (mobile view): Currently set to black. Change the #000 hex color to whatever you want your background to be for your logo. If you don't want a background color, simply delete the below `.myLogo-icon` styles below */
      .myLogo-icon {
        background: radial-gradient(circle, #000 58%, transparent 61%);
        height: 75px;
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>