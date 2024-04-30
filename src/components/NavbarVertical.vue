<template>
<nav class="vertical-nav black-gradient d-flex justify-content-start flex-column pt-5">
  <ul class="nav-list">
    <li v-for="link in navLinks" :key="link.id" :class="{ 'active' : activeLink === link.id }" class="nav-item">
      <a :link-text="link.name" class="nav-link" @click="scrollTo(link.id)">{{ link.name }}</a>
    </li>
  </ul>
</nav>
</template>

<script>
import { computed, ref } from 'vue';
import navLinks from '../constants/NavLinks';
import { logger } from '../utils/Logger';
import { accountService } from '../services/AccountService';

export default {
  setup() {
    let activeLink = ref(null);

    const foundLink = computed(() => {
      return navLinks.find(link => link.id);
    });
    
    //Compensates for fixed headers so header does not cover the top of the scrolled element. Adjust padding (`yOffset` constant below) as needed. 1 increment = 1px.
    async function scrollTo(id) {
      try {
        let scrollElem = document.getElementById(id);
        activeLink.value = id;
        await accountService.setLinkAsScrollElem(foundLink.value, scrollElem);
        
      } catch (error) {
        logger.error(`Element with id ${id} not found in navLinks.`);
      }
    }
    return {
      activeLink,

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
  z-index: 1;
  .vertical-nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #181326, #0e0c13);
    z-index: -1;
  }
  .nav-link::before,
  .nav-item::before,
  .nav-item::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
:is(.nav-item):has(.active) {
  background-clip: text !important;
  -webkit-background-clip: text !important;
  width: 100%;
  display: block;
  background: transparent !important;
}

.vertical-nav {
  position: relative;
  height: 100vh;
  background: var(--black-transparent-gradient) !important;
  ul.nav-list {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
    & li.nav-item {
      width: 100%;
      padding: 0.25rem;
      margin: 0.75rem 0 0.75rem 2rem;
      border-radius: 1rem;
      background: var(--black-purple-radial-gradient);
      user-select: none;
      &:active,
      &:focus,
      &.active {
        position: relative;
        view-transition-name: nav;
        display: block;
        background-clip: padding-box;
        border-radius: 1rem;
        box-shadow: inset 20px 0 30px 10px var(--shadow-pink);
        filter: drop-shadow(0 0 10px var(--pink));
        transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, filter 0.3s ease-in-out;
        &::before {
          content: '';
          background: var(--black-purple-radial-gradient);
          box-shadow: inset 20px 0 30px 10px var(--dark-pink);
          border-radius: 1rem;
        }
        &::after {
          content: '';
          background: linear-gradient(90deg, transparent, #0e0c13 75%);
          border-radius: 1rem;
        }
      }
      &:not(.active) {
        position: relative;
        background: var(--black-purple-radial-gradient-alt);
        outline: var(--border-inactive);
        filter: drop-shadow(0 0 10px var(--shadow-dark-purple));
        &::before {
          content: '';
          background: var(--black-purple-radial-gradient-alt);
          box-shadow: inset 20px 0 30px 10px var(--shadow-inactive);
          border-radius: 1rem;
        }
      }
      & a.nav-link {
        color: var(--text-primary);
        width: 100%;
        display: block;
        padding: 1rem 2rem;
        border-radius: 1rem;
        text-decoration: none;
        transition: color 0.3s;
        &:hover {
          color: var(--purple);
        }
        &::before {
          content: attr(link-text) " ";
          padding: 1rem 2.2rem;
          color: var(--text-primary);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          z-index: 2;
        }
      }
    }
  }
  ::view-transition-group(nav) {
    animation-duration: 1s;
  }
}
</style>