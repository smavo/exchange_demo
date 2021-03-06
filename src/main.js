import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"; // Importar desde el directorio source
import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { usdFilter, percenFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));

Vue.filter("dollar", usdFilter);
Vue.filter("porcentaje", percenFilter);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
