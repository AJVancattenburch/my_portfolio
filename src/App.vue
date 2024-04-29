<script setup>
import { AppState } from './AppState'


</script>

<template>
  <header>
  </header>
  <main>
    <router-view />
  </main>
  <section class="col-12 d-flex justify-content-end">
    <footer class="col-lg-10 d-flex justify-content-center black-gradient-reverse text-light px-3">Designed By: Anthony Vancattenburch</footer>
  </section>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  position: fixed;
  bottom: 0;
  display: grid;
  height: 32px;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
}
</style>
