<template>
  <div id="app">
    <!-- 缓存 -->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view/>
    </keep-alive>
    <!-- 不缓存 -->
  <router-view v-if="!$route.meta.keepAlive"></router-view>
      
  </div>
</template>

<style>
/* #app{
  margin: 0 auto;
  width: 1150px;
} */
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
