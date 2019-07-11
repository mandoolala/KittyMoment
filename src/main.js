import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";

import Gallery from "./components/Gallery.vue";
import LiveStream from "./components/LiveStream.vue";
import PicturePopup from "./components/PicturePopup.vue";
import VideoPopup from "./components/VideoPopup.vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: "/gallery", component: Gallery },
  { path: "/livestream", component: LiveStream },
  { path: "/picturepopup", component: PicturePopup },
  { path: "/videopopup", component: VideoPopup }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
