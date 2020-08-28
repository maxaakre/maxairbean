<template>
  <div id="app">
    <div>
      <Navbar v-if="showNavbar" />
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    showNavbar() {
      return this.$store.state.showNavbar;
    },
  },
  beforeMount() {
    this.$store.dispatch("findUuid");
    this.$store.dispatch("getMenuList");
  },
};
</script>

<style lang="scss">
:root {
  @import url("https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap");
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Work Sans";
  text-align: center;
  color: #38846d;
  background: #f3e4e1;
  box-sizing: border-box;
  max-width: 480px;
  margin: 0 auto;
}
@media screen and (min-width: 1024px) {
  #app {
    overflow: scroll;
  }
}
</style>
