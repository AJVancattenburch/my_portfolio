
<template>
  <nav class="navbar navbar-expand-sm custom-navbar px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img alt="logo" src="../assets/img/my-logo.png" class="my-logo" height="45" />
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
* {
  color: var(--text-off-white);
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
}

.navbar-inner {
  background: transparent;
}

.custom-navbar {
  background: var(--purple-blue-gradient);
}

.my-logo {
  border-radius: 50%;
}

.my-name {
  font-weight: bold;
  margin-left: 1rem;
  text-shadow: 0 1px 2px var(--blue);
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
