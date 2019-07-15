<template>
  <div>
    <vue-tabs active-tab-color="white" active-text-color="#FF82A3">
      <v-tab title="Pictures" icon="ti-user">
        <PicturePopup></PicturePopup>
      </v-tab>

      <v-tab title="Videos">
        <VideoPopup></VideoPopup>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import PicturePopup from "./PicturePopup";
import VideoPopup from "./VideoPopup";

export default {
  name: "Gallery",
  components: {
    VueTabs,
    VTab,
    PicturePopup,
    VideoPopup,
  }
};
</script>

<style>
.vue-tabs .nav > li span.title {
  font-size: 18px;
  font-weight: bold;
}
</style>
