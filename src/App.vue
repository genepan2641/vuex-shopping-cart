<template>
  <div id="app">
    <router-link :to="{name: 'productList'}">list</router-link>
    <router-link :to="{name: 'shoppingCart'}">My Cart</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~@/assets/sass/_variables.scss";
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

.bold {
  font-weight: 500;
}

.boldest {
  font-weight: 700;
}
</style>
