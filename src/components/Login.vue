<template>
  <div class="wrapper">
    <div class="login">
      <h1>Välkomen till AirBean-familjen!</h1>
      <h2>
        Genom att skapa ett konnto
        nedan kan du skapa och se din orderhistorik
      </h2>
      <form @submit.prevent="login">
        <label for="name">Name</label>
        <input v-model="name" placeholder="Name" type="text" class="name" />
        <label for="email">Email</label>
        <input v-model="email" placeholder="Email@email.com" type="email" />
        <div class="radio">
          <label for="gdpr">GDPR</label>
          <input class="gdpr" type="radio" />
        </div>
        <button type="submit" class="button">Brew me a cup!</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    login() {
      localStorage.setItem("cookie-consent", true);
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);

      this.$store.dispatch("udateName", { name: this.name, email: this.email });
      this.$router.push("/menu");
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  position: fixed;
  top: 8.9rem;
  left: 1rem;
  right: 1rem;
  height: 8rem;
  margin: auto;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3e4e1;
  height: 80%;

  color: black;
}
.login {
  margin: auto;
}
.radio {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0 1.5rem;
}
.button {
  background: #2f2926;
  height: 3.5rem;
  width: 15rem;
  color: white;
  border-radius: 25px;
  font-size: 1.5rem;
  font-family: serif;
  font-weight: bold;
}
input {
  height: 3rem;
  width: 90%;
  border-radius: 5px;
  background: none;
  border: 1px solid black;
  color: black;
  font-family: sans-serif;
  font-size: 1.3em;
  font-weight: lighter;
  padding: 0.5rem 0.3rem;
  margin: 1rem;
}

h1 {
  font-size: 2rem;
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-top: 0.5rem;
}

h2 {
  color: black;
  font-family: "Work Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: lighter;
  padding: 1rem;
}

.gdpr {
  width: 20px;
}
</style>
