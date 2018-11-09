<template>
  <div id="app">
    <router-link :to="{name: 'productList'}">list</router-link>
    <router-link class="shopping-cart-link" :to="{name: 'shoppingCart'}">My Cart</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

html {
  font-size: 10px;
}
body,
html {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.shopping-cart-link {
  background-color: yellow;
  color: black;
  display: inline-block;
  padding: 30px 50px;
  float: right;
}
</style>
