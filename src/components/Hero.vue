<template>
  <section class="purple-gradient">
    <div class="hero-wrapper">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to my portfolio</h1>
        <p class="hero-subtitle">I'm a web developer</p>
        <button class="hero-button">View my work</button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  setup() {
  }
}
</script>

<style scoped lang="scss">
.purple-gradient {
  position: relative;
  //filter: drop-shadow(0 20px 20px #000000);
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
  width: 100%;
  height: 100vh;
  background: url(../assets/img/backgrounds/hero.svg), #00000050;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-content {
    text-align: center;
    color: var(--text-primary);
    z-index: 1;
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .hero-button {
      padding: 0.5rem 1rem;
      background-color: var(--purple);
      color: var(--text-primary);
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: var(--dark-purple);
      }
    }
  }
}
</style>