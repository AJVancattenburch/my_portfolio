<template>
<nav class="vertical-nav black-gradient d-flex justify-content-end pt-5">
  <ul class="nav-list">
    <li class="nav-item active" v-for="link in navLinks" :key="link.id">
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.25rem;
  background: var(--black-gradient);
}

ul.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  & li.nav-item {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--black-gradient);
    &:active,
    &:focus,
    .active {
      view-transition-name: nav;
      display: block;
      background-clip: padding-box;
      border-radius: 100vw 0 0 100vw;
      position: relative;
      width: 100%;
      background: var(--black-purple-radial-gradient);  
      filter: drop-shadow(0 0 0px #0e0c13);
    }
    & a.nav-link {
      color: var(--text-primary);
      display: block;
      padding: 1rem 2rem;
      text-decoration: none;
      transition: color 0.3s;
      &:hover {
        color: var(--purple);
      }
      &:active,
      &:focus {
        background: #000000;
        box-shadow: inset 0 0 10px 10px #0e0c13;
        transition: background box-shadow 0.3s;
      }
    }
  }
}
</style>