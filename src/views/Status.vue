<template>
  <div class="status">
    <div class="loader" v-if="loading">
      <img src="./../assets/graphics/loader.png" alt="loading!" />
    </div>
    <p class="order" v-if="order.orderNr">
      Ordernummer
      <span>#{{order.orderNr}}</span>
    </p>
    <img v-if="order.orderNr" src="./../assets/graphics/drone.svg" alt="drone" />
    <h1 v-if="order.orderNr">Din beställing är påväg!</h1>
    <h1 v-if="!order.orderNr && !loading">Här ser du din beställing</h1>
    <p class="eta" v-if="order.orderNr">ETA {{ order.eta }} min</p>
    <a href="#" class="btn" @click="$router.push('/menu')">OK, Cool!</a>
  </div>
</template>

<script>
export default {
  name: "Status",
  computed: {
    order() {
      return this.$store.state.activeOrder;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="scss" scoped >
@import url("https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap");
.status {
  background: #e5674e;
  height: 100vh;
  color: white;
  text-align: center;
  padding: 1rem;

  .order {
    padding: 2rem;
  }
  .loader {
    display: flex;
    align-items: center;
    justify-self: center;
    flex-direction: column;
    margin: 4rem 0;
    img {
      width: 4rem;
      animation: none;
    }
  }
  img {
    width: 300px;
    animation: hover 5s linear infinite;
  }
  @keyframes hover {
    0% {
      transform: translateY(0) rotateZ(0deg);
    }
    25% {
      transform: translateY(0.25rem) rotateZ(1deg);
    }
    50% {
      transform: translateY(0.5rem) rotateZ(0deg);
    }
    75% {
      transform: translateY(0.25rem) rotateZ(-1deg);
    }
    100% {
      transform: translateY(0) rotateZ(0deg);
    }
  }

  h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
    padding: 1.5rem;
  }

  .eta {
    font-size: 1.1rem;
    margin: 2rem;
  }
  .btn {
    display: flex;
    max-width: 14rem;
    width: 100%;
    font-family: "PT Serif", serif;
    font-size: 1.4rem;
    text-decoration: none;
    height: 4rem;
    margin: auto;
    justify-content: center;
    align-items: center;
    color: #222;
    border-radius: 999rem;
    background: rgba($color: #ffffff, $alpha: 0.8);
    &:active {
      background: white;
    }
  }
}
img {
  margin: 2rem;
  animation: none;
}
h1 {
  font-size: 2.5rem;
  margin: 1rem 0;
}
</style>