<script setup>
import Navbar from './components/Navbar.vue';
import ResumeModal from './components/ResumeModal.vue';
import ResumeCard from './components/ResumeCard.vue';
import Footer from './components/Footer.vue';
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
  <Footer />
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 50px);
}

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
