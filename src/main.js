import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue3-cookies";
import axios from "axios";
import VueAxios from "vue-axios";
import { routes } from "./routes";
import { createWebHashHistory, createRouter } from "vue-router";

const app = createApp(App);

app.use(VueAxios, axios);

app.use(VueCookies, {
  expireTimes: "180d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
