<script setup>
import Navbar from './components/Navbar.vue'
import ResumeModal from './components/ResumeModal.vue'
import ResumeCard from './components/ResumeCard.vue'
</script>

<template>
  <header>
    <div class="col-12 d-lg-none">
      <Navbar />
    </div>
  </header>
  <main>
    <router-view />
    
    <div class="col-12 d-flex flex-column justify-content-center align-items-center">
      <ResumeModal id="resumeModal">
        <ResumeCard />
      </ResumeModal>
    </div>
  </main>
  <footer class="col-12 d-flex justify-content-end">
    <span class="col-12 col-lg-10 d-flex justify-content-center black-gradient-reverse text-light px-3">Designed By: Anthony Vancattenburch</span>
  </footer>
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
  z-index: 1;
  overflow: hidden;
}
</style>
