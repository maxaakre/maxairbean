<template>
  <div class="menuicon" v-on:click="close">
    <img
      class="menuiconimage"
      v-if="type==='menuicon'"
      src="./../assets/graphics/navicon.svg"
      alt="menuicon"
    />
    <img
      class="menuiconimage"
      v-if="type==='close'"
      src="./../assets/graphics/close.svg"
      alt="close"
    />
  </div>
</template>

<script>
export default {
  name: "Menuicon",
  props: {
    type: String,
  },
  methods: {
    close() {
      this.$store.commit("closeNavbar");
    },
  },
};
</script>

<style lang="scss">
.menuicon {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 2rem;
  border-radius: 100%;
  margin-top: 70px;
  margin-left: 30px;
}
.menuiconimage {
  width: 100px;
}
</style>