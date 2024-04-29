<template>
<nav class="vertical-nav black-gradient d-flex justify-content-start flex-column pt-5">
  <ul class="nav-list">
    <li v-for="link in navLinks" :key="link.id" class="nav-item active">
      <a class="nav-link" @click="scrollTo(link.id)">{{ link.name }}</a>
    </li>
  </ul>
</nav>
</template>

<script>
import navLinks from '../constants/NavLinks';
import { logger } from '../utils/Logger';
import { accountService } from '../services/AccountService';
import { computed, ref } from 'vue';

export default {
  setup() {

    const foundLink = computed(() => {
      return navLinks.find(link => link.id);
    });

    //Compensates for fixed headers so header does not cover the top of the scrolled element. Adjust padding (`yOffset` constant below) as needed. 1 increment = 1px.
    async function scrollTo(id) {
      try {
        let scrollElem = document.getElementById(id);
        
        await accountService.setLinkAsScrollElem(foundLink.value, scrollElem);
        
      } catch (error) {
        logger.error(`Element with id ${id} not found in navLinks.`);
      }
    }

    return {
      scrollTo,
      navLinks,
      foundLink,
      isActive: computed(()  => {
        if (foundLink.value.isActive) {
          return !foundLink.value.isActive;
        }
      }),
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

.vertical-nav {
  position: relative;
  width: 100%;
  height: 100vh;
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
      margin: 0.75rem 0 0.75rem 6rem;
      border-radius: 1rem;
      background: var(--black-purple-radial-gradient);
      &:active,
      &.active {
        view-transition-name: nav;
        display: block;
        background-clip: padding-box;
        border-radius: 50% 0 0 50%;
        background: var(--black-purple-radial-gradient);  
        box-shadow: inset 50px 0 30px 10px var(--shadow-red);
        filter: drop-shadow(0 0 10px var(--pink));
        transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, filter 0.3s ease-in-out;
        user-select: none;
        //The reason the active link doesn't keep it's active state is because the active class is removed when the link is clicked. This is because the active class is added to the link that is clicked, and the active class is removed from the link that was previously clicked. This is why the active class is removed from the link that was previously clicked. If you don't want 
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
        
      }
    }
  }
}
</style>