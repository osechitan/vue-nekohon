<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product">商品情報</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* ナビゲーション */
nav {
    display: flex;
    align-items: center;
    background: #222;
}
nav a {
    display: block;
    padding: 0.5em;
    color: #eee;
    line-height: 1em;
    text-decoration: none;
}
/* アクティブなリンク */
.router-link-active {
    background: palevioletred;
}
</style>
