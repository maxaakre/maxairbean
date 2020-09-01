<template>
  <div class="cart">
    <h3>Din beställning</h3>
    <Cartitem v-for="(item,index) in cart" v-bind:key="index" v-bind:item="item" />
    <div class="totalamount">
      <h3>
        Total
        <span class="dots"></span>
        {{ totalamount }} kr
      </h3>
      <p>Inkl moms + drönarleverans</p>
    </div>
    <a href class="button" @click.prevent="sendOrder">Take My Money</a>
  </div>
</template>

<script>
import Cartitem from "./Cartitem";
export default {
  name: "Cart",
  components: {
    Cartitem,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalamount() {
      return this.$store.getters.totalMountCart;
    },
  },
  methods: {
    sendOrder() {
      this.$store.dispatch("sendOrder");
      this.$router.push("/status");
    },
  },
};
</script>


<style lang="scss">
.cart {
  position: fixed;
  background: white;
  top: 8rem;
  right: 0.1rem;
  left: 0.1rem;
  margin: 1rem;
  z-index: 999;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2), 0 0 4rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  h3 {
    padding: 1rem;
  }
  .totalamount {
    flex-direction: column;
    margin: 2rem 1rem;
    h3 {
      display: flex;
      .dots {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-bottom: 2px dotted black;
        margin: 3px;
      }
    }
    p {
      justify-content: flex-start;
      margin: 0 0 0 5px;
      padding: 0;
    }
  }
  .button {
    display: flex;
    font-size: 1.4rem;
    width: 90%;
    align-items: center;
    text-decoration: none;
    height: 4rem;
    margin: 2rem 1rem;
    justify-content: center;
    align-items: center;
    color: #eee;
    border-radius: 50px;
    background: black;
    &:active {
      color: white;
      background: black;
    }
  }
}
</style>
