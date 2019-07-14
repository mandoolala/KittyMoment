<template>
  <div>
    <vue-tabs active-tab-color="white" active-text-color="#FF82A3">
      <v-tab title="Pictures" icon="ti-user">
        <PicturePopup3></PicturePopup3>
      </v-tab>

      <v-tab title="Videos" >
        <VideoPlayer></VideoPlayer>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer";
import PicturePopup3 from "./PicturePopup3";
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

export default {
  name: "Gallery2",
  components: {
    VideoPlayer,
    PicturePopup3,
    VueTabs,
    VTab
  }
};
</script>

<style scoped></style>
