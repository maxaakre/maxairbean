
<template>
  <div class="menu">
    <Menuicon :type="'menuicon'" />
    <Carticon />
    <h1>Meny</h1>
    <Menuitem v-for="item in menu" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Menuicon from "./../components/Menuicon";
import Carticon from "./../components/Carticon";
import Menuitem from "./../components/MenuItem";

export default {
  name: "Menu",
  components: {
    Menuicon,
    Carticon,
    Menuitem,
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    },
  },
};
</script>

<style lang="scss" >
.menu {
  height: 100vh;
  color: black;
  width: 100%;
  padding: 1rem 1rem;
  h1 {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  box-sizing: border-box;
  background-image: url("../assets/graphics/graphics-header.svg"),
    url("../assets/graphics/graphics-footer.svg");
  background-position: top center, bottom center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100%, 100%;
}
</style>

