<script setup>
import heroData from '../constants/Hero';
</script>

<template>
  <section :id="heroData.id" class="purple-gradient">
    <div class="col-12 d-flex hero-wrapper p-5 pe-0">
      <div class="col-12 col-lg-7 text-container">
        <h1 class="hero-header">{{ heroData.myGreeting }}
          <span class="highlight-purple">{{ heroData.myName }}</span>
        </h1>
        <div class="hero-subheader">
          <span class="my-title">{{ heroData.myTitle }}</span>
          <br />
          <div v-for="skill in heroData.mySkills" :key="skill.name" class="skill-container">
            <span class="text-secondary pe-2">{{ skill.hook }}</span>
            <span :class="skill.textGradient">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img :src="heroData.myImageHero" alt="Hero" class="my-image img-fluid" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import url('../assets/scss/mobile/_heroStyles.scss');
@import url('../assets/scss/_loaders.scss');

.purple-gradient {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
.hero-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: baseline;
  width: 100%;
  height: 100vh;
  background: url(../assets/img/backgrounds/hero.svg), #00000050;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  .hero-header {
    color: var(--text-primary);
    font-weight: 900;
    font-size: 80px;
    line-height: 98px;
    margin-top: 2rem;
    >span.highlight-purple {
      color: var(--purple);
    }
  }
  .hero-subheader {
    color: var(--text-secondary);
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    opacity: 1;
    filter: brightness(1.2);
  }
  .image-container {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: right;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
    .my-image {
      width: 85%;
      height: 85%;
      object-fit: cover;
      object-position: center;
      filter:
        drop-shadow(3px -3px 15px #000000)
        drop-shadow(75px 0px 2px var(--purple))
        drop-shadow(75px 0px 2px var(--green))
        drop-shadow(75px 25px 2px var(--pink))
        drop-shadow(75px 25px 2px var(--blue));
    }
  }
}

@media (max-width: 1024px) {
  .hero-wrapper {
    filter: scale(0.75);
  }
}
</style>