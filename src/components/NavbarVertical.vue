<template>
<nav class="vertical-nav black-gradient d-flex justify-content-start flex-column pt-4">
  <div class="col-7 d-flex justify-content-center ps-2 pb-2">
    <img @click="scrollTo('hero')" title="SVG logo Design By: Anthony Vancattenburch" alt="Anthony's custom SVG logo/brand" src="../assets/img/icons/logo.svg" class="my-logo" height="65" />
  </div>

  <resume-modal-button class="resume-modal-container d-flex justify-content-center">
    <a type="button" role="button" class="resume-modal-btn" data-bs-toggle="modal" data-bs-target="#resumeModal">
      <img src="../assets/img/my-resume.svg" title="Check out my resume!" alt="Modal button to view my resume" height="40" />
    </a>
  </resume-modal-button>
  <ul class="nav-list">
    <li v-for="link in navLinks" :key="link.id" :class="{ 'active' : activeLinkId === link.id }" class="nav-item">
      <a :link-text="link.name" class="nav-link" @click="scrollTo(link.id)">{{ link.name }}</a>
    </li>
  </ul>
</nav>
</template>

<script>
import { computed, ref } from 'vue';
import navLinks from '../constants/NavLinks';
import heroData from '../constants/Hero';
import { logger } from '../utils/Logger';
import { accountService } from '../services/AccountService';

export default {
  setup() {
    let heroSection = ref(heroData.id);
    let activeLinkId = ref(null);

    const foundLink = computed(() => {
      return navLinks.find(link => link.id === activeLinkId.value);
    });
    
    //Compensates for fixed headers so header does not cover the top of the scrolled element. Adjust padding (`yOffset` constant below) as needed. 1 increment = 1px.
    async function scrollTo(id) {
      try {
        let scrollElem = document.getElementById(id);
        activeLinkId.value = id;

        await accountService.setLinkAsScrollElem(foundLink.value, scrollElem);
        
      } catch (error) {
        logger.error(`Element with id ${id} not found in navLinks.`);
      }
    }
    return {
      heroSection,
      activeLinkId,

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
}

.vertical-nav::after {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 70%, #0e0c13);
}

.resume {
  &-modal-container {
    position: absolute;
    top: 3.5%;
    right: 10%;
    cursor: pointer;
    transition: transform 0.3s;
    z-index: 3;
  }
  &-modal-btn {
    background: var(--black-purple-radial-gradient);
    box-shadow: inset 0 4px 10px var(--shadow-purple);
    border-radius: 50%;
    padding: 0.5rem;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
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
  background: var(--black-purple-radial-gradient) !important;
  .my-logo {
    user-select: none;
    z-index: 3;
  }
  ul.nav-list {
    position: relative;
    top: 0.5rem;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li.nav-item {
    padding: 0.25rem;
    margin: 0.75rem 0.75rem 0.75rem 2rem;
    border-radius: 1rem;
    background: var(--black-purple-radial-gradient);
    //clip-path: polygon(0 0, 98% 0, 98% 100%, 0 100%);
    user-select: none;
    z-index: 3;
    &:active,
    &:focus,
    &.active {
      position: relative;
      view-transition-name: nav;
      display: block;
      background-clip: padding-box;
      border-radius: 1rem;
      box-shadow: inset 20px 0 30px 10px var(--dark-pink);
      filter: drop-shadow(-7px 0 3px var(--dark-pink));
      transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, filter 0.3s ease-in-out;
      &::before {
        content: '';
        width: 100%;
        background: var(--black-purple-radial-gradient);
        box-shadow: inset 20px 0 30px 10px var(--dark-pink);
        border-radius: 1rem;
      }
      &::after {
        content: '';
        background: linear-gradient(90deg, transparent, #14101f 75%, #0e0c13 100%);
        border-radius: 1rem;
      }
    }
    &:not(.active) {
      position: relative;
      background: var(--black-purple-radial-gradient-alt);
      //outline: var(--border-inactive);
      filter: drop-shadow(0 0 10px var(--shadow-dark-purple));
      &::before {
        content: '';
        background: var(--black-purple-radial-gradient-alt);
        box-shadow: inset 20px 0 30px 10px var(--shadow-inactive);
        border-radius: 1rem;
      }
      &::after {
        content: '';
        background: linear-gradient(90deg, transparent, #14101f 75%, #0e0c13 100%);
        border-radius: 1rem;
      }
    }
  }
  
  a.nav-link {
    color: var(--text-primary);
    width: 100%;
    display: block;
    padding: 1rem 2rem;
    border-radius: 1rem;
    text-decoration: none;
    transition: color 0.3s;
    z-index: 3;
    &::before {
      content: attr(link-text) " ";
      padding: 1rem 2.2rem;
      color: var(--text-primary);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      transition: color 0.3s;
      z-index: 3;
    }
    &:hover::before {
      color: #fff;
      transition: color 0.3s;
    }
  }
  
  ::view-transition-group(nav) {
    animation-duration: 1s;
  }
}
</style>