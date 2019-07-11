<template>
    <div id="app">
        <div class="page">
            <div class="pageHeader">
                <h1>Kitty Moments</h1>
            </div>
            <div class="pageNavigator">

            </div>
            <div class="pageContent">
                <h2>Live Streaming</h2>
                <LiveStream></LiveStream>
            </div>
            <div class="pageRightPanel">
                <h2>Gallery</h2>
                <Gallery></Gallery>
            </div>
            <div class="pageButton">
                <toggle-button :value="false"
                               color="lightpink"
                               :sync="true"
                               :labels="true"/>
                <p align="right"><button id="btnCapture">CAPTURE</button><br/>
                    <button id="btnRecord">RECORD</button></p>
            </div>
            <div class="pageFooter">
                <h3>footer</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Gallery from "./components/Gallery.vue";
import LiveStream from "./components/LiveStream.vue";
import PicturePopup from "./components/PicturePopup.vue";
import VideoPopup from "./components/VideoPopup.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ToggleButton from 'vue-js-toggle-button';

export default {
  name: "App",
  components: {
    Gallery,
    LiveStream,
    PicturePopup,
    VideoPopup
  },
  data() {
    return {
      picture: {
        image: "",
        created_At: ""
      },
      video: {
          id: 1,
          thumbnail:"",
          imageURL: "",
          created_At: ""
      }
    };
  }
};
Vue.use(ToggleButton);
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    BODY{
        margin:20px 0px 20px 0px;
        background-color: aliceblue;
        font-family: Arial;
        font-size: 12px;
    }
    .page{
        display:block;
        width: 100%;
        height:100%;
        overflow: auto;
        margin:0px auto 0px auto;
        box-sizing: border-box;
    }
    .pageHeader{
        background-color: lightpink;
        float:left;
        clear:none;
        min-height: 150px;
        width:100%;
        box-sizing: border-box;
        padding:10px;
    }
    .pageNavigator{
        background-color: lightcoral;
        color: #ffffff;
        text-align: center;
        float: left;
        clear: none;
        min-height: 50px;
        width:100%;
        box-sizing: border-box;
        padding:10px;
    }
    .pageRightPanel{
        background-color: aqua;
        float:right;
        clear:none;
        width: 34%;
        display: flex;
        flex-direction: column;
    }
    .pageContent{
        background-color: aquamarine;
        float: left;
        clear: none;
        width: 66%;
        display: flex;
        flex-direction: column;
    }
    .pageButton{
        background-color: blanchedalmond;
        float:left;
        clear: none;
        width: 66%;
        display:flex;
        flex-direction: row;
    }
    .pageFooter{
        background-color: peachpuff;
        float: left;
        width: 100%;
        clear: none;
        display: flex;
        flex-direction: row;
    }
</style>
