<template>
  <div class="menuitem">
    <div class="additem" @click="additem">
      <button>
        <img src="./../assets/graphics/add.svg" alt="add icon" />
      </button>
    </div>
    <h3 class="itemtitle">
      {{ item.title}}
      <span class="dots"></span>
    </h3>
    <p class="itemdesc">{{ item.desc}}</p>
    <h4 class="itemprice">{{ item .price }} kr</h4>
  </div>
</template>

<script>
export default {
  name: "Menuitem",
  props: {
    item: Object,
  },
  methods: {
    additem() {
      this.$store.dispatch("additemTocart", this.item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.menuitem {
  display: grid;
  grid-template-columns: 3rem 1fr 4rem;
  grid-template-rows: 1.5rem 1.5rem;
  margin: 2rem 0 2rem 0;

  .additem {
    display: flex;
    grid-row: 1/2;
    grid-column: 1/2;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      border-radius: 99rem;
      background: black;
      margin: 4px 10px;
    }
    img {
      width: 25px;
    }
  }
  .itemtitle {
    padding-left: 0.8rem;
    display: flex;
    font-size: 1.5rem;

    .dots {
      display: flex;
      flex: 1;
      margin: 10px;
      border-bottom: 1px dotted black;
    }
  }
  .itemdesc {
    grid-column: 2/3;
    grid-row: 2/3;
    font-weight: lighter;
    margin-left: 10px;
    padding-top: 2px;
  }
  .itemprice {
    grid-column: 3/4;
    grid-row: 1/2;
    display: flex;
    font-size: 20px;
    font-display: bold;
  }
}
</style>
