<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import SVGGithub from './SVGGithub.vue';
import SVGLinkedIn from './SVGLInkedIn.vue';
import { footerLinks } from '../constants/FooterLinks';

const ghLink = computed(() => footerLinks.githubLink);
const linkedInLink = computed(() => footerLinks.linkedInLink);

</script>

<template>
  <footer class="col-12 d-flex justify-content-center bg-footer">
      <span class="col-12 col-lg-10 offset-lg-2 d-flex justify-content-between black-gradient-reverse text-light p-2">
        <span class="col-11 d-flex justify-content-center m-0">©2024 Copyright:&nbsp;<strong>Anthony Vancattenburch</strong></span>
        <span class="col-1 d-flex justify-content-around align-items-center">
          <a :href="ghLink.external_url" target="_blank" rel="noopener noreferrer" class="pe-1 pt-1">
            <SVGGithub :fillColor="'var(--purple)'" :strokeColor="'var(--dark-purple)'" :strokeWidth="3" class="gh-icon" />
          </a>
          <a :href="linkedInLink.external_url" target="_blank" rel="noopener noreferrer" class="pe-1">
            <SVGLinkedIn class="linkedin-icon" />
          </a>
        </span>
      </span>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: fixed;
  bottom: 0;
  display: grid;
  height: 50px;
  width: 100%;
  z-index: 4;
  overflow: hidden;
  &.bg-footer {
    background: #0f0d16;
  }
  .gh-icon {
    display: flex;
    width: 25px;
    height: 25px;
  }
  .linkedin-icon {
    transform: scale(0.95);
  }
}

@media (max-width: 768px) {
  footer, .bg-footer {
    background: none;
    height: 0;
    span {
      display: none !important;
      max-height: 0;
    }
  }
}
</style>