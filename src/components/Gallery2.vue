<template>
  <div>
    <vue-tabs active-tab-color="white" active-text-color="#FFBCCE">
      <v-tab title="First tab" icon="ti-user">
        <PicturePopup3></PicturePopup3>
      </v-tab>

      <v-tab title="Second tab" icon="ti-settings">
        <VideoPlayer></VideoPlayer>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer";
import PicturePopup from "./PicturePopup";
import PicturePopup2 from "./PicturePopup2";
import PicturePopup3 from "./PicturePopup3";
import VideoPopup2 from "./VideoPopup2";
import VideoPopup3 from "./VideoPopup3";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

export default {
  name: "Gallery2",
  components: {
    VideoPlayer,
    PicturePopup,
    PicturePopup2,
    PicturePopup3,
    VideoPopup2,
    VideoPopup3,
    VueTabs,
    VTab
  }
};
</script>

<style scoped></style>
