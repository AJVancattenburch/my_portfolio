<script setup>
import { footerLinks } from "../constants/FooterLinks.js";
import SVGGitHub from "./SVGGithub.vue";
import SVGLinkedIn from "./SVGLInkedIn.vue";

const githubLink = footerLinks.githubLink
const linkedInLink = footerLinks.linkedInLink
</script>

<template>
  <section class="d-flex flex-column justify-content-center">
    <a :href="githubLink.external_url" target="_blank" rel="noopener noreferrer">
      <SVGGitHub />
    </a>
    <a :href="linkedInLink.external_url" target="_blank" rel="noopener noreferrer">
      <SVGLinkedIn />
    </a>
  </section>
</template>

<style scoped lang="scss"></style>