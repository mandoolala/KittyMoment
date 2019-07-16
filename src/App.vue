<template>
  <div id="app">
    <div class="page">
      <div class="pageHeader">
        <h1>Kitty Moments</h1>
      </div>
      <div class="pageMain">
        <div class="pageContent">
          <h2>Live Streaming</h2>
          <img
            id="video"
            ref="video"
            crossorigin="anonymous"
            src="http://1.246.1.243:9000/stream/video.mjpeg"
          />
          <canvas
            ref="canvas"
            width="1640"
            height="920"
            style="width:500px; position: absolute; top: -500px;"
          >
          </canvas>
          <div class="pageButton">
            <div id="autotoggle">
              <p>Auto Capture Mode</p>
              <toggle-button
                :value="false"
                color="#FF82A3"
                :sync="true"
                :labels="true"
                style="margin-left: 10px"
              />
            </div>
            <div style="display:flex; flex-direction: row;">
              <button id="btnCapture" @click="imageCapture">
                <img v-bind:src="require('./assets/camera.svg')" />
                Take Photo
              </button>
              <div>
                <button
                  class="btnRecord"
                  v-show="!onRecord"
                  @click="videoRecord"
                >
                  <img v-bind:src="recordstart" />
                  Start Recording
                </button>
                <button
                  class="btnRecord"
                  v-show="onRecord"
                  @click="videoRecord"
                >
                  <img v-bind:src="recordstop" />
                  Stop Recording
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="pageRightPanel">
          <div style="display:flex; flex-direction:row;">
            <h2>Gallery</h2>
            <b-button
              id="slideshow"
              variant="danger"
              v-b-modal.modal-lg.modal-center
              ><img v-bind:src="require('./assets/caraosel.png')" />Slide
              View</b-button
            >
            <b-modal id="modal-lg" size="lg" hide-footer="true">
              <swiper :options="swiperOption">
                <swiper-slide v-for="(image, index) in images" :key="index"
                  ><img class="popupimage" v-bind:src="image.dataURL"
                /></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>

                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
              <!--<div class="swiper-container swiper-container-horizontal">
                <div
                  class="swiper-wrapper"
                  style="transition-duration: 0ms; transform: translate3d(-2040px, 0px, 0px);"
                >
                  <div class="swiper-slide" style="width: 1020px;">
                    <img/>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-prev"
                    style="width: 1020px;"
                  >
                    <img/>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-active"
                    style="width: 1020px;"
                  >
                    <img/>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-next"
                    style="width: 1020px;"
                  >
                    <img/>
                  </div>
                  <div class="swiper-slide" style="width: 1020px;">
                    <img/>
                  </div>
                  <div class="swiper-slide" style="width: 1020px;">
                    <img/>
                  </div>
                  <div class="swiper-slide" style="width: 1020px;">
                    <img/>
                  </div>
                  <div class="swiper-slide" style="width: 1020px;">
                    <img/>
                  </div>
                  <div class="swiper-slide" style="width: 1020px;">
                    <img/>
                  </div>
                  <div class="swiper-slide" style="width: 1020px;">
                    <img/>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>-->
            </b-modal>
          </div>

          <div>
            <vue-tabs active-tab-color="white" active-text-color="#FF82A3">
              <v-tab title="Pictures" icon="ti-user">
                <PicturePopup v-bind:images="images"></PicturePopup>
              </v-tab>

              <v-tab title="Videos">
                <VideoPopup v-bind:videos="videos"></VideoPopup>
              </v-tab>
            </vue-tabs>
          </div>
        </div>
      </div>

      <div class="pageFooter" />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import PicturePopup from "./components/PicturePopup";
import VideoPopup from "./components/VideoPopup";

import toastr from "toastr";
import moment from "moment";
moment().format();

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYm0LyiQt00CIxpIPjAJ2ia_U5nlX6lUw",
  authDomain: "kittymoments.firebaseapp.com",
  databaseURL: "https://kittymoments.firebaseio.com",
  projectId: "kittymoments",
  storageBucket: "kittymoments.appspot.com",
  messagingSenderId: "993659424800",
  appId: "1:993659424800:web:369f1500eefe3b4e"
};

let storage;
let storageRef;
let imagesRef;
let videoRef;

let mediaRecorder;
let recordedBlobs;
let timestamp;
let RecordRef;
let raf;

export default {
  name: "App",
  components: {
    VueTabs,
    VTab,
    swiper,
    swiperSlide,
    PicturePopup,
    VideoPopup
  },
  created() {
    firebase.initializeApp(firebaseConfig);
    storage = firebase.storage();
    storageRef = storage.ref();
    imagesRef = storageRef.child("images");
    videoRef = storageRef.child("videos");

    imagesRef
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          itemRef.getDownloadURL().then(downloadURL => {
            this.images.push({
              title: itemRef.name,
              dataURL: downloadURL
            });
          });
        });
      })
      .catch(function(error) {
        console.log("could not retreive list");
      });

    videoRef
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          itemRef.getDownloadURL().then(downloadURL => {
            this.videos.push({
              title: itemRef.name,
              dataURL: downloadURL,
              showModal: false
            });
          });
        });
      })
      .catch(function(error) {
        console.log("could not retreive list");
      });
  },

  data() {
    return {
      recordstart: require("./assets/video.svg"),
      recordstop: require("./assets/stop.svg"),
      onRecord: false,

      images: [],
      videos: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    imageCapture: function(event) {
      const timestamp = moment(new Date()).format("DD-MMM-YYYY hh:mm A");
      const CaptureRef = imagesRef.child(timestamp);
      const metadata = {
        contentType: "image/jpeg"
      };

      fetch("http://1.246.1.243:9000/stream/snapshot.jpeg")
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
          // Here's where you get access to the blob
          // And you can use it for whatever you want
          // Like calling ref().put(blob)

          const uploadTask = CaptureRef.put(blob, metadata);

          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              toastr.info("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log("Upload is paused");
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log("Upload is running");
                  break;
              }
            },
            error => {
              switch (error.code) {
                case "storage/unauthorized":
                  alert("User doesn't have permission to access the object");
                  break;

                case "storage/canceled":
                  alert("User canceled the upload");
                  break;

                case "storage/unknown":
                  alert("Unknown error occurred, inspect error.serverResponse");
                  break;
              }
            },
            () => {
              const snapshotRef = uploadTask.snapshot.ref;
              // Upload completed successfully, now we can get the download URL
              uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                this.images.unshift({
                  title: snapshotRef.name,
                  dataURL: downloadURL
                });
              });
            }
          );
        });
    },

    videoRecord: function() {
      if (this.onRecord === false) {
        this.onRecord = true;
        this.startRecording();
      } else {
        this.onRecord = false;
        this.stopRecording();
      }
    },

    startRecording: function() {
      const canvas = this.$refs.canvas;
      const stream = canvas.captureStream();
      const options = { mimeType: "video/webm" };
      const img = this.$refs.video;

      cancelAnimationFrame(raf);
      const copy = () => {
        raf = requestAnimationFrame(copy);
        canvas.getContext("2d").drawImage(img, 0, 0);
      };
      raf = requestAnimationFrame(copy);

      timestamp = moment(new Date()).format("DD-MMM-YYYY hh:mm A");
      RecordRef = videoRef.child(timestamp);

      recordedBlobs = [];

      mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorder.onstop = () => {
        const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
        this.upload(superBuffer, RecordRef);
      };
      function handleDataAvailable(event) {
        if (event.data && event.data.size > 0) {
          recordedBlobs.push(event.data);
          console.log("put");
        }
      }

      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.start(100);
    },

    stopRecording: function() {
      cancelAnimationFrame(raf);
      mediaRecorder.stop();
    },

    upload: function(blob, RecordRef) {
      // const metadata = {
      //   contentType: "videp/webm"
      // };
      const uploadTask = RecordRef.put(blob);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          toastr.info("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        error => {
          switch (error.code) {
            case "storage/unauthorized":
              alert("User doesn't have permission to access the object");
              break;

            case "storage/canceled":
              alert("User canceled the upload");
              break;

            case "storage/unknown":
              alert("Unknown error occurred, inspect error.serverResponse");
              break;
          }
        },
        () => {
          const snapshotRef = uploadTask.snapshot.ref;
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.videos.unshift({
              title: snapshotRef.name,
              dataURL: downloadURL,
              showModal: false
            });
          });
        }
      );
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bad+Script|Lobster|Lobster+Two|Merienda|Pacifico|Rancho|Satisfy|Sniglet|Tangerine|Varela+Round&display=swap");
@import url("https://fonts.googleapis.com/css?family=Atma|Crafty+Girls|Delius+Swash+Caps|Gabriela|Sunshiney|Unkempt&display=swap");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 20px 0px 20px 0px;
  font-family: "Times New Roman";
  font-size: 12px;
  background-image: url("./assets/back2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffc6d7+0,ffdbe5+0,ffccdb+25,ffbacd+50,ffb2c8+75,ffadc1+100 */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffc6d7+0,ffbcce+0,ffccd9+25,ffd1dd+50,ffdde6+75,ffeaf0+100 */
  /*
  background: #ffc6d7;
  background: -moz-linear-gradient(
    top,
    #ffc6d7 0%,
    #ffbcce 0%,
    #ffccd9 25%,
    #ffd1dd 50%,
    #ffdde6 75%,
    #ffeaf0 100%
  );
  background: -webkit-linear-gradient(
    top,
    #ffc6d7 0%,
    #ffbcce 0%,
    #ffccd9 25%,
    #ffd1dd 50%,
    #ffdde6 75%,
    #ffeaf0 100%
  );
  background: linear-gradient(
    to bottom,
    #ffc6d7 0%,
    #ffbcce 0%,
    #ffccd9 25%,
    #ffd1dd 50%,
    #ffdde6 75%,
    #ffeaf0 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc6d7', endColorstr='#ffeaf0',GradientType=0 );*/
}
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  margin: 0px auto 0px auto;
  box-sizing: border-box;
}
.pageHeader {
  /*background-color: lightpink;*/
  font-family: "Atma";
  font-weight: 800;
  font-size: 100px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

h1 {
  display: block;
  font-size: 60px;
  text-align: center;

  /*
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  */
  font-weight: bold;
}

.swiper-slide swiper-slide-active{
  width: 650px;
  height: 650px;
}

.pageMain {
  display: flex;
  flex-direction: row;
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

h2 {
  display: block;
  font-size: 40px;
  text-align: left;
  margin-bottom: 20px;
  /*
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  */
  font-weight: bold;
}

.pageContent {
  /*background-color: aquamarine;*/
  display: flex;
  flex-direction: column;
  flex: 3;
  font-family: "Atma";
  padding: 50px;
}

#video {
  width: 100%;
}

.pageButton {
  /*background-color: blanchedalmond;*/
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 12px;
}

#autotoggle {
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bolder;
}

#btnCapture {
  font-size: 16px;
  font-weight: bolder;
  height: 29px;
}

.btnRecord {
  font-size: 16px;
  margin-left: 10px;

  font-weight: bolder;
}

b-button {
  text-align: center;
  margin-right: 100px;
}

#slideshow {
  margin-top: 50px;
  margin-left: 300px;
}

.btn {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 5px;
  padding-right: 5px;
}

.btn-danger {
  background-color: #db9bc2;
  height: 27px;
  border-color: #db9bc2;
  padding-bottom: 15px;
}

.btn-danger:hover {
  background-color: #db9bc2;
  border-color: #db9bc2;
  opacity: 0.7;
}

.pageRightPanel {
  /*background-color: aqua;*/
  display: flex;
  flex-direction: column;
  flex: 2;
  font-family: "Atma";
  padding: 50px;
}

.vue-tabs .nav > li span.title {
  font-size: 18px;
  font-weight: bold;
}

.popupimage{
  width:650px;
  height:480px;

}
.pageFooter {
  /*background-color: peachpuff;*/

  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 50px;
}
</style>
