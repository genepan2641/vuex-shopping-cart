<template>
  <div id="app">
    <app-nav></app-nav>
    
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppNav from '@/layout/AppNav.vue';
export default {
  components: {
    AppNav
  },
  name: 'App'
}
</script>

<style lang="scss">
@import "~@/assets/sass/_variables.scss";
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

html {
  font-size: 12px;
}
body,
html {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  font-size: $font-size-5;
}

button {
  cursor: pointer;
  appearance: none;
  font-size: $font-size-5;
}

h1 {
  font-size: $font-size-1;
}

h2 {
  font-size: $font-size-2;
}

h3 {
  font-size: $font-size-3;
}

h4 {
  font-size: $font-size-4;
}

h5 {
  font-size: $font-size-5;
}

h6 {
  font-size: $font-size-6;
}

p {
  font-size: $font-size-5;
}

.btn-primary {
  background-color: white;
  color: black;
  padding: 8px 10px;
  outline: none;
  border-radius: 0px;
  text-align: center;
  border: 1px solid black;
}

.btn-secondary {
  background-color: black;
  color: white;
  padding: 8px 10px;
  outline: none;
  border-radius: 0px;
  text-align: center;
}

.form-control {
  border-radius: 0px;
  border: 1px solid black;
  height: 40px;
  padding: 8px 10px;
}

.bold {
  font-weight: 500;
}

.boldest {
  font-weight: 700;
}

.page-container {
  max-width: 960px;
  margin: 45px auto 0px;
}
</style>
