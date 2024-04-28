
<template>
  <nav class="navbar navbar-expand-sm custom-navbar black-gradient px-3">
    <router-link class="col-3 navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img alt="logo" src="../assets/img/icons/logo.svg" class="my-logo" height="45" />
        <span class="my-name">AJ Vancattenburch</span>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="col-9 collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link class="nav-link" :to="{ name: 'Resume' }">My Resume</router-link>
        </li>
        <li v-for="link in navLinks" :key="link.id" class="nav-item">
          <span v-if="link.primary" @click="scrollTo(link?.id)" :title="link.title" class="nav-link">{{ link.name }}</span>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <div>
        
      </div>
    </div>
  </nav>
</template>

<script>
import navLinks from '../constants/NavLinks';
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    //Scrolls to elements and compensates for fixed headers, so that the header does not cover the element's heading. Adjust padding (the `yOffset` constant below) as needed. 1 increment = 1px.
    function scrollTo(id) {
      const yOffset = -65;
      let scrollElem = document.getElementById(id);
      logger.log(`Scrolling to ${id}. Found element: ${scrollElem}.`);
      if (!scrollElem) {
    logger.error(`Element with id ${id} not found in navLinks.`);
    return;
  }
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
}

.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  filter: brightness(0.9);
  .my-logo {
    border-radius: 50%;
  }
  .my-name {
    font-weight: 550;
    margin-left: 1rem;
    text-shadow: 0 1px 2px var(--blue);
  }
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



a:hover {
  text-decoration: none;
}

.navbar-nav .nav-item {
  display: flex;
  align-items: center;
  margin: 0 0.5rem;

  .nav-link {
    text-transform: uppercase;
  }
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
  }
}
</style>
