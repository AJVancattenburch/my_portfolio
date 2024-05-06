<script setup>
import SVGGithub from "./SVGGithub.vue";
import SVGLinkedIn from './SVGLInkedIn.vue';
import { footerLinks } from '../constants/FooterLinks';
import { computed } from "vue";

const ghLink = computed(() => footerLinks.githubLink);
const linkedInLink = computed(() => footerLinks.linkedInLink);
</script>

<template>
  <footer class="col-12 d-flex justify-content-center bg-footer">
      <span class="col-12 col-lg-10 offset-lg-2 d-flex justify-content-between black-gradient-reverse text-light p-2">
        <span class="col-11 d-flex justify-content-center m-0">©2024 Copyright:&nbsp;<strong>Anthony Vancattenburch</strong></span>
        <span class="col-1 d-flex justify-content-around">
          <a :href="ghLink.external_url" target="_blank" rel="noopener noreferrer" class="pe-1">
            <SVGGithub class="gh-icon" />
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
    justify-content: center;
    align-items:baseline;
    width: 25px;
    height: 25px;
  }
  .linkedin-icon {
    transform: scale(0.95);
  }
}
</style>