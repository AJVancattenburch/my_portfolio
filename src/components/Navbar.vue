
<template>
    <nav class="">
      <ul v-for="link in navLinks" :key="link.id" class="nav-list">
        <li :disabled="!link.isActive" class="active">
          <a class="nav-link" @click="scrollTo(link?.id)" aria-current="page">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  <!-- <nav class="">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img alt="logo" src="../assets/img/icons/logo.svg" class="my-logo" height="45" />
        <span class="my-name">AJ Vancattenburch</span>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="nav-list">
        <li class="active">
          <router-link class="nav-link" :to="{ name: 'Resume' }">My Resume</router-link>
        </li>
        <li v-for="link in navLinks" :key="link.id" class="nav-item">
          <span v-if="link.primary" @click="scrollTo(link?.id)" :title="link.title" class="nav-link">{{ link.name }}</span>
        </li>
      </ul>
      LOGIN COMPONENT HERE
      <div>
        
      </div>
    </div>
  </nav> -->
</template>

<script>
import { ref } from "vue";
import navLinks from '../constants/NavLinks';
import { logger } from "../utils/Logger.js";

export default {
  setup() {

    const isActive = ref()

    function scrollTo(id) {
      const yOffset = -65;
      let scrollElem = document.getElementById(id);
      logger.log(`Scrolling to ${id}. Found element: ${scrollElem}.`);
     
      if (!scrollElem) {
        logger.error(`Element with id ${id} not found.`);
        return;
      }
      adjustScrollYOffset(scrollElem, yOffset);
    }

    function adjustScrollYOffset(scrollElem, yOffset) {
      let y = scrollElem.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'})
    }
    return {
      scrollTo,
      navLinks,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  color: var(--text-primary) !important;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.25rem;
  background: var(--black-purple-gradient);
}

nav {
  padding-inline-end: 20rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: var(--black-purple-radial-gradient);
  padding-block: 2rem;
  width: 0;
  max-width: 10rem;
  height: 100vh;
  z-index: 1000;
}

.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  gap: 1rem;
}

.nav-list .nav-link {
  color: white;
  display: block;
  text-decoration: none;
}

.nav-list li {
  padding-block: 1rem;
  padding-inline: 2rem;
  margin-inline: 1rem 0;
  /* prevent animation glitch on right side */
  box-shadow: 2px 0 0 var(--black-purple-gradient);
}

.nav-list li.active {
  view-transition-name: nav;
  display: block;
  background: var(--black-purple-gradient);
  position: relative;
  z-index: -1;
  border-radius: 100vw 0 0 100vw;
}

::view-transition-group(nav) {
  animation-duration: 1s;
}

.nav-list li.active::before,
.nav-list li.active::after {
  --border-radius: 1rem;

  content: "";
  position: absolute;
  width: var(--border-radius);
  height: var(--border-radius);
  right: 0rem;
  background: var(--black-purple-radial-gradient);
}

.nav-list li.active::before {
  border-radius: 0 0 var(--border-radius);
  top: calc(var(--border-radius) * -1);
  box-shadow: 5px 5px 0 5px var(--black-purple-gradient);
}

.nav-list li.active::after {
  border-radius: 0 var(--border-radius) 0 0;
  bottom: calc(var(--border-radius) * -1);
  box-shadow: 5px -5px 0 5px var(--black-purple-gradient);
}

.nav-list li:nth-child(1) a {
  view-transition-name: test;
}

.nav-list li:nth-child(2) a {
  view-transition-name: test-2;
}

.nav-list li:nth-child(3) a {
  view-transition-name: test-3;
}
.navbar-toggler {
  padding: 0.5rem;
  z-index: 2;
  &:focus {
    border: 2px solid var(--dark-purple);
  }
  .navbar-toggler-icon {
    background-image: url(../assets/img/icons/hamburger-menu.svg);
    background-size: cover;
    width: 20px;
    height: 20px;
  }
}

@media screen and (min-width: 576px) {
  nav {
    height: auto;
  }
}
</style>
