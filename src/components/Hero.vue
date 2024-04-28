<template>
  <section class="purple-gradient">
    <div class="col-12 d-flex hero-wrapper p-5 pe-0">
      <div class="col-12 col-lg-7 text-container">
        <h1 class="hero-header">{{heroData.myGreeting}}
          <span class="highlight-purple">{{heroData.myName}}</span>
        </h1>
        <div class="hero-subheader">
          <span class="my-title">{{ heroData.myTitle }}</span>
          <br />
          <div v-for="skill in heroData.mySkills" :key="skill.name">
            <span class="text-secondary pe-2">{{ skill.hook }}</span>
            <span :class="skill.textGradient">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      <div class="image-container d-flex justify-content-center align-items-center">
        <img :src="heroData.myImageHero" alt="Hero" class="my-image img-fluid" />
      </div>
    </div>
  </section>
</template>

<script>
import heroData from '../constants/Hero';

export default {
  setup() {
    return {
      heroData,
    };
  },
};
</script>

<style scoped lang="scss">
.purple-gradient {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
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
    position: relative;
    width: 100%;
    height: 100%;
    .my-image {
      position: absolute;
      right: 0;
      width: 50%;
      filter:
        drop-shadow(3px -3px 15px #000000)
        drop-shadow(75px 0px 2px var(--purple))
        drop-shadow(75px 0px 2px var(--red))
        drop-shadow(75px 25px 2px var(--green))
        drop-shadow(75px 25px 2px var(--blue));
    }
  }
}


@media (max-width: 900px) {
  .hero-wrapper {
    padding: 3rem 0 0 2rem !important;
  }
  .hero-header {
    font-size: 60px;
    line-height: 80px;
  }
  .hero-subheader {
    font-size: 26px;
    line-height: 40px;
  }
  .image-container {
    .my-image {
      width: 60% !important;
    }
  }
}

@media (max-width: 768px) {
  .hero-wrapper {
    height: 97vh !important;
  }
  .hero-header {
    font-size: 50px !important;
    line-height: 60px !important;
  }
  .hero-subheader {
    font-size: 20px !important;
    line-height: 30px !important;
  }
  .image-container {
    overflow: hidden;
    .my-image {
      top: 3.75rem;
      width: 60% !important;
    }
  }
}

@media (max-width: 576px) {
  .hero-wrapper {
    height: 100vh !important;
  }
  .hero-header {
    font-size: 40px !important;
    line-height: 50px !important;
  }
  .hero-subheader {
    font-size: 18px !important;
    line-height: 28px !important;
  }
  .image-container {
    top: 2rem;
    .my-image {
      width: 90% !important;
    }
  }
}
</style>