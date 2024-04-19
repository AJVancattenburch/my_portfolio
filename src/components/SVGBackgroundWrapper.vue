<template>
  <section class="svg-background-wrapper">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.svg-background-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    height: 100vw;
    background: url(../assets/img/svg-background.svg) no-repeat center center / cover;
    background-color: var(--purple);
    transform: rotate(90deg);
    padding: 0;
    margin: 0;
    z-index: 0;
  }
}
</style>