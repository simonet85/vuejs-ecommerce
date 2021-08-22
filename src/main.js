import Vue from "vue";
import App from "./App.vue";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.config.productionTip = false;

Vue.use(VueRouter);

//Global Filter
Vue.filter("currency", function (value) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});

//Event bus
export const eventBus = new Vue();

//Routes
const routes = [
  { path: "/", component: ProductList },
  { path: "/cart", component: Cart }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
