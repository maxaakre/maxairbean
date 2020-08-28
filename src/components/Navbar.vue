<template>
  <div class="menu-nav" :type="'close'">
    <Menuicon :type="'close'" />
    <router-link @click.native="close" class="links" to="/menu">Meny</router-link>
    <hr class="lines" />
    <router-link @click.native="close" class="links" to="/about">Vårt kaffe</router-link>
    <hr class="lines" />
    <router-link @click.native="close" class="links" to="/profile">Min profil</router-link>
    <hr class="lines" />
    <router-link @click.native="close" class="links" to="/status">Orderstatus</router-link>
  </div>
</template>

<script>
import Menuicon from "./../components/Menuicon";
export default {
  name: "Navbar",
  components: {
    Menuicon,
  },
  methods: {
    close() {
      this.$store.commit("closeNavbar");
    },
  },
};
</script>

<style lang="scss">
.menu-nav {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  background: black;
  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    padding: 2rem;
    margin: 1rem;
    text-decoration: none;
    color: white;
    font-family: serif;
  }
  .lines {
    width: 150px;
    background: darkgray;
    margin: auto;
  }
  .menuiconimage {
    width: 30px;
  }
}
</style>