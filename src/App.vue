<template>
  <div id="app">
    <div class="page">
      <div class="pageHeader">
        <h1>Kitty Moments</h1>
      </div>

      <div class="pageContent">
        <h2>Live Streaming</h2>
        <LiveStream />
      </div>
      <div class="pageRightPanel">
        <h2>Gallery</h2>
        <gallery2 />
      </div>
      <div class="pageButton">
        <toggle-button
          :value="false"
          color="#FF82A3"
          :sync="true"
          :labels="true"
        />

        <p align="right">
          <button id="btnCapture"> CAPTURE </button>
          <button id="btnRecord"> RECORD </button>
        </p>
      </div>
      <div class="pageFooter" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import Gallery from "./components/Gallery.vue";
import Gallery2 from "./components/Gallery2.vue";
import LiveStream from "./components/LiveStream.vue";
// import PicturePopup from "./components/PicturePopup.vue";
// import PicturePopup2 from "./components/PicturePopup2.vue";
// import VideoPopup from "./components/VideoPopup.vue";
// import VideoPlayer from "./components/VideoPlayer.vue";
// import VueGallerySlideshow from "vue-gallery-slideshow";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ToggleButton from "vue-js-toggle-button";

export default {
  name: "App",
  components: {
    // Gallery,
    LiveStream,
    // PicturePopup,
    // VideoPopup,
    // PicturePopup2,
    Gallery2
  },
  data() {
    return {
      picture: {
        id: 1,
        image: "",
        created_At: ""
      },
      video: {
        id: 1,
        thumbnail: "",
        videoURL: "",
        created_At: ""
      }
    };
  }
};
Vue.use(ToggleButton);
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bad+Script|Lobster|Lobster+Two|Merienda|Pacifico|Rancho|Satisfy|Sniglet|Tangerine|Varela+Round&display=swap");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 20px 0px 20px 0px;
  font-family: "Times New Roman";
  font-size: 12px;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffc6d7+0,ffdbe5+0,ffccdb+25,ffbacd+50,ffb2c8+75,ffadc1+100 */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffc6d7+0,ffbcce+0,ffccd9+25,ffd1dd+50,ffdde6+75,ffeaf0+100 */
  background: #ffc6d7; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #ffc6d7 0%,
    #ffbcce 0%,
    #ffccd9 25%,
    #ffd1dd 50%,
    #ffdde6 75%,
    #ffeaf0 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #ffc6d7 0%,
    #ffbcce 0%,
    #ffccd9 25%,
    #ffd1dd 50%,
    #ffdde6 75%,
    #ffeaf0 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffc6d7 0%,
    #ffbcce 0%,
    #ffccd9 25%,
    #ffd1dd 50%,
    #ffdde6 75%,
    #ffeaf0 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc6d7', endColorstr='#ffeaf0',GradientType=0 ); /* IE6-9 */
}
.page {
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0px auto 0px auto;
  box-sizing: border-box;
}
.pageHeader {
  /*background-color: lightpink;*/
  float: left;
  clear: none;
  font-family: "Lobster";
  font-size: 50px;
  min-height: 150px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.pageNavigator {
  /*background-color: lightcoral;*/
  color: #ffffff;
  text-align: center;
  float: left;
  clear: none;
  min-height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.pageRightPanel {
  /*background-color: aqua;*/
  float: right;
  clear: none;
  font-family: "Lobster";
  margin-right: 20px;
  width: 32%;
  display: flex;
  flex-direction: column;
}
.pageContent {
  /*background-color: aquamarine;*/
  float: left;
  clear: none;
  font-family: "Lobster";
  margin-left: 20px;
  width: 64%;
  display: flex;
  flex-direction: column;
}
.pageButton {
  /*background-color: blanchedalmond;*/
  float: left;
  margin-left: 20px;
  clear: none;
  width: 64%;
  display: flex;
  flex-direction: row;
}
.pageFooter {
  /*background-color: peachpuff;*/
  float: left;
  width: 100%;
  clear: none;
  display: flex;
  flex-direction: row;
  min-height: 50px;
}
</style>
