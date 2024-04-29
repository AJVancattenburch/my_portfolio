<template>
<nav class="black-gradient d-flex justify-content-center">
  <ul class="nav-list">
    <li class="active" v-for="link in navLinks" :key="link.id">
      <a class="nav-link" @click="scrollTo(link.id)">{{ link.name }}</a>
    </li>
  </ul>
</nav>
</template>

<script>
import navLinks from '../constants/NavLinks';
import { logger } from '../utils/Logger';

export default {
  setup() {
    //Compensates for fixed headers so header does not cover the top of the scrolled element. Adjust padding (`yOffset` constant below) as needed. 1 increment = 1px.
  function scrollTo(id) {
    const yOffset = -65;
    let scrollElem = document.getElementById(id);
    logger.log(`Scrolling to ${id}. Found element: ${scrollElem}.`);
    if (!scrollElem) {
      logger.error(`Element with id ${id} not found in navLinks.`);
      return;
    }
    let y = scrollElem.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
    return {
      scrollTo,
      navLinks,
    };
  },
}
</script>
<style scoped lang="scss">

* {
  color: var(--text-primary) !important;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  font-size: 1.25rem;
  background: var(--black-gradient);
}

.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  & li {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--black-purple-radial-gradient);
    &:active,
    .active {
      view-transition-name: nav;
      display: block;
      background: var(--purple);
      position: relative;
      border-radius: 100vw 0 0 100vw;
    }
    & a {
      color: var(--text-primary);
      display: block;
      text-decoration: none;
      transition: color 0.3s;
      &:hover {
        color: var(--purple);
      }
    }
  }
}
</style>