import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const API = "http://localhost:5050/api/beans";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeOrder: {},
    loading: false,
    menu: [],
    showNavbar: false,
    cart: [],
    orderHistory: [],
    user: { name: "", email: "" },
  },
  mutations: {
    login(state, data) {
      state.user = data;
    },
    displayMenu(state, menu) {
      state.menu = menu;
    },
    closeNavbar(state) {
      state.showNavbar = !state.showNavbar;
    },
    additem(state, item) {
      state.cart.push({
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: 1,
      });
    },
    orderStatus(state, order) {
      state.activeOrder = order;
    },
    emptyCart(state) {
      state.cart = [];
    },
    updateItemInCart(state, id) {
      let index = state.cart.findIndex((item) => item.id === id);
      state.cart[index].quantity++;
    },
    removeItemInCart(state, id) {
      let index = state.cart.findIndex((item) => item.id === id);
      state.cart.splice(index, 1);
    },
    orderHistory(state, orderHistory) {
      state.orderHistory = orderHistory;
    },
  },
  actions: {
    async udateName(context, data) {
      await context.commit("login", data);
    },

    async getMenuList(context) {
      let resp = await axios.get(API);
      context.commit("displayMenu", resp.data.menu);
    },
    additemTocart(context, item) {
      let checkItem = context.state.cart.filter(
        (check) => check.id === item.id
      );

      if (checkItem.length > 0) {
        context.commit("updateItemInCart", checkItem[0].id);
      } else {
        context.commit("additem", item);
      }
    },
    async sendOrder(context) {
      let order = {
        items: context.state.cart,
      };

      let uuid = await localStorage.getItem("airbeans");

      try {
        context.state.loading = true;
        let resp = await axios.post(`${API}/order/${uuid}`, order);
        context.state.loading = false;
        context.commit("orderStatus", resp.data);
      } catch (err) {
        console.log("someting went wrong");
      }
      //remove
      context.state.cart = [];

      //  empty cart
      context.commit("emptyCart");
    },
    async findUuid() {
      try {
        if (localStorage.getItem("airbeans") === null) {
          let uuid = await axios.get(`${API}/key`);
          localStorage.setItem("airbeans", uuid.data.key);
        }
      } catch (error) {
        console.error("someting went wrong");
      }
    },
    async getOrders(context) {
      let uuid = await localStorage.getItem("airbeans");
      try {
        let resp = await axios.get(`${API}/profile/${uuid}`);
        context.commit("orderHistory", resp.data);
      } catch (error) {
        console.error("someting went wrong");
      }
    },
  },
  getters: {
    cartItemCount(state) {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantity;
      });
      return total;
    },
    totalMountCart(state) {
      let totalamount = 0;
      state.cart.forEach((item) => {
        totalamount += item.price * item.quantity;
      });
      return totalamount;
    },
    totalAmount(state) {
      let amount = 0;
      amount += state.orderHistory
        .map((item) => item.total)
        .reduce((a, b) => {
          return a + b;
        }, 0);
      return amount;
    },
  },
});
