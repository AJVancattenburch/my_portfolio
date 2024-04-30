
<template>
  <nav class="navbar navbar-expand-lg custom-navbar black-gradient px-3">
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
      <ul class="navbar-nav me-auto">
        <li>
          
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <div>
        
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

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

.nav-link {
  text-transform: uppercase;
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