<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>

import { reactive, provide } from 'vue';

//DADOS DO USUARIO
const userData = reactive({

  name: 'Alec',
  username: 'alecrim'

});

//data will be avaiable por all child components of app.vue
provide('userData', userData);

</script>

<style scoped>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  position: absolute;
  background-color: beige;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
}

</style>
