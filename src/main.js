import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import ToggleButton from "vue-js-toggle-button";

Vue.use(BootstrapVue);
Vue.use(ToggleButton);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
