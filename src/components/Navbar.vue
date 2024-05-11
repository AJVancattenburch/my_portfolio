<script setup>
import { scrollTo } from '../utils/Helpers';
import { navLinks } from '../constants/_index';
import { ref } from 'vue';
import heroData from '../constants/Hero';

let hero = ref(heroData.id);
let activeLinkId = ref(null);
</script>

<template>
  <nav class="navbar navbar-expand-lg custom-navbar black-gradient px-3">
    <div class="d-flex align-items-center">
      <img @click="scrollTo(hero)" src="../assets/img/icons/logo.svg" title="SVG logo Design By: Anthony Vancattenburch" alt="SVG Logo Design By: Anthony Vancattenburch" class="my-logo" height="45" />
      <span class="my-name">AJ Vancattenburch</span>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto black-gradient-reverse">
        <li v-for="link in navLinks" :key="link.id" :class="{ 'active' : activeLinkId === link.id }" class="nav-item">
          <a :link-text="link.name" :title="link.sectionTitle" class="nav-link text-primary" @click="scrollTo(link.id)" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">{{ link.name }}</a>
        </li>
        <li class="nav-item">
          <span data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="true" aria-label="Toggle navigation">
            <a type="button" role="button" class="resume-modal-btn" data-bs-toggle="modal" data-bs-target="#resumeModal" title="Check out my resume!">Resume</a>
          </span>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <div>
        
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap';

* {
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
}

.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  text-shadow: 0 2px 0 var(--purple), 0 0px 20px var(--blue);
  width: 100vw;
  z-index: 1000;
  filter: brightness(0.9);
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
.nav-link {
  padding-top: 0rem;
  font-weight: 500;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: var(--text-secondary) !important;
  }
}
.navbar-nav {
  position: absolute;
  right: 0;
  height: auto;
  padding: 1.5rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: var(--black-transparent-gradient) !important;
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