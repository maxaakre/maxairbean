<template>
  <div class="main">
    <Menuicon :type="'menuicon'" />
    <h1>Vårt Kaffe</h1>
    <p class="intro">
      Crow's nest schooner bilge water fluke matey yo-ho-ho topgallant holystone heave to swab.
      Corsair measured fer yer chains bounty spyglass Gold Road weigh anchor ahoy topsail Davy
      Jones' Locker swing the lead. Wench provost run a shot across the bow lugsail transom tack pirate matey log grapple.
    </p>

    <p>
      Blow the man down overhaul rope's end to go on account capstan crow's nest dead men tell no tales
      furl wench dance the hempen jig. List Corsair Privateer mizzen crow's nest cackle fruit main sheet gibbet rum salmagundi.
      Loot hogshead jury mast hang the jib bounty hornswaggle provost pink gaff grog blossom.
    </p>

    <p>
      Flogging sheet red ensign dance the hempen jig quarter shrouds gunwalls hardtack Jack Ketch furl. S
      tarboard tack Shiver me timbers chase weigh anchor mutiny skysail bilged on her anchor port lee.
      Jolly Roger fire ship prow mizzen starboard barkadeer gabion yo-ho-ho bounty log.
    </p>
    <div class="b">
      <img src="../assets/graphics/eva-cortado.jpg" alt />
      <h2>Eva Cortado</h2>
      <p>VD & Grundare</p>
    </div>
  </div>
</template>

<script>
import Menuicon from "./../components/Menuicon";
export default {
  name: "About",
  components: {
    Menuicon,
  },
  props: {
    type: String,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Work Sans", sans-serif;
}

#app {
  max-width: 480px;
  margin: 0 auto;
}
.menuicon {
  margin-top: -20px;
}
.main {
  padding: 6rem 1.3rem;
  box-sizing: border-box;
  background-image: url("../assets/graphics/graphics-header.svg"),
    url("../assets/graphics/graphics-footer.svg");
  background-position: top center, bottom center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100%, 100%;
  background-color: #f3e4e1;
  color: black;
}
h1,
h2,
h3 {
  font-family: "PT Serif", serif;
}

h1 {
  font-size: 2.5rem;
  margin: 1rem 0;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0;
}

h3 {
  font-size: 1.4rem;
  margin: 0;
}
h1,
h4 {
  margin: 50px 0 0 0;
}
p {
  font-weight: bold;
  margin: 20px 30px;
}

p {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: normal;
  line-height: 160%;
}
.b {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 140%;
  margin: 0;
}

img {
  border-radius: 50%;
}
</style>