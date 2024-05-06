<template>
  <ul>
    <li><a href="#"><i class="mdi-brands mdi mdi-linkedin"></i></a></li>
    <li><a href="#"><i class="mdi-brands mdi mdi-github"></i></a></li>
</ul>
</template>

<style scoped lang="scss">


ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ul li {
  position: relative;
  list-style: none;
  margin: 10px 20px;
  cursor: pointer;
}
ul li a {
  text-decoration: none;
}
ul li a .mdi-brands {
  font-size: 6em;
  color: #222;
}
ul li a::before {
  font-family: "Material Design Icons";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 6em;
  height: 0;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

ul li:nth-child(1) a::before {
  content: "\F033B";
  background-image: linear-gradient(#155CDE, #2EB5F0);
  -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  border-bottom: 4px solid #155CDE;
}
ul li:nth-child(2) a::before {
  content: "\F02A4";
  background-image: linear-gradient(var(--purple), var(--dark-purple));
  -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  border-bottom: 4px solid var(--purple);
}
ul li:hover a::before {
  height: 100%;
}
</style>