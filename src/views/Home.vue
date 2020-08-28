<template>
  <div id="home" @click="$router.push('/profile')">
    <img src="./../assets/graphics/airbean-landing.svg" alt="logo" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
#home {
  height: 100vh;
  background-color: #38846d;
  background-image: url("./../assets/graphics/intro-graphic-left.svg"),
    url("./../assets/graphics/intro-graphic-right.svg") !important;
  background-position: top left, top right !important;
  background-size: auto 100%, auto 100% !important;
  background-repeat: no-repeat, no-repeat !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
