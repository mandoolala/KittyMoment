import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import ToggleButton from "vue-js-toggle-button";

import Gallery from "./components/Gallery.vue";
import LiveStream from "./components/LiveStream.vue";
import PicturePopup from "./components/PicturePopup.vue";
import VideoPopup from "./components/VideoPopup.vue";

Vue.use(BootstrapVue);
Vue.use(ToggleButton);


Vue.config.productionTip = false;


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDYm0LyiQt00CIxpIPjAJ2ia_U5nlX6lUw",
  authDomain: "kittymoments.firebaseapp.com",
  databaseURL: "https://kittymoments.firebaseio.com",
  projectId: "kittymoments",
  storageBucket: "kittymoments.appspot.com",
  messagingSenderId: "993659424800",
  appId: "1:993659424800:web:369f1500eefe3b4e"
};

// Initialize Firebase
window.firebase = firebase.initializeApp(firebaseConfig);




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
