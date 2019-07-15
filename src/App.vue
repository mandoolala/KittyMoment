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
            ref="videoRec"
            crossorigin="anonymous"
            src="http://1.246.1.243:9000/stream/video.mjpeg"
          />
          <canvas
            ref="canvas"
            width="1640"
            height="920"
            style="width: 500px; position: absolute; top: -500px;"
          />
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
            <p align="right">
              <button id="btnCapture" @click="imageCapture">
                <img v-bind:src="require('./assets/camera.svg')" />Take Photo
              </button>
              <button id="btnRecord" ref="recordButton" @click="videoRecord">
                <img
                  v-bind:src="recordstart"
                  @click="recordstart = recordstop"
                />
                {{ buttontext.text }}
              </button>
            </p>
          </div>
          <p ref="recordtime" style="">Record time</p>
        </div>
        <div class="pageRightPanel">
          <h2>Gallery</h2>
          <gallery />
        </div>
      </div>

      <div class="pageFooter" />
    </div>
  </div>
</template>

<script>
import Gallery from "./components/Gallery.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import toastr from "toastr";
import moment from "moment";
moment().format();

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();
const imagesRef = storageRef.child("images");
const videoRef = storageRef.child("videos");

let mediaRecorder;
let recordedBlobs;

export default {
  name: "App",
  components: {
    Gallery
  },
  data() {
    return {
      recordstart: require("./assets/video.svg"),
      recordstop: require("./assets/stop.svg"),
      buttontext: {
        text: 'Start Recording'
      },

    images: [
        {
          title: "",
          dataURL: ""
        }
      ],
      videos: [
        {
          title: "",
          dataURL: "",
          playLength: "",
          ThumbnailURL: "",
          showModal: false
        }
      ]
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
              // Upload completed successfully, now we can get the download URL
              uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function(downloadURL) {
                  images.push({
                    title: snapshot.ref.name,
                    dataURL: downloadURL
                  });
                });
            }
          );
        });
    },

    videoRecord: function(event) {
      let canvas = this.$refs.canvas;
      const recordButton = this.$refs.recordButton;
      const timestamp = moment(new Date()).format("DD-MMM-YYYY hh:mm A");
      const metadata = {
        contentType: "videp/webm"
      };
      const RecordRef = videoRef.child(timestamp);

      function upload(blob) {
        const uploadTask = RecordRef.put(blob, metadata);
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
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function(downloadURL) {
                videos.push({
                  title: snapshot.ref.name,
                  dataURL: downloadURL
                });
              });
          }
        );
      }
      function handleDataAvailable(event) {
        if (event.data && event.data.size > 0) {
          recordedBlobs.push(event.data);
        }
      }
      function handleStop(event) {
        const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
        upload(superBuffer);
      }
      const stream = canvas.captureStream();
      let options = { mimeType: "video/webm" };
      mediaRecorder = new MediaRecorder(stream, options);
      recordedBlobs = [];

      if (this.buttontext.text === "Start Recording") {
        this.buttontext.text = "Stop Recording";
        mediaRecorder.onstop = handleStop;
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start(1000); // collect 100ms of data
      } else {
        mediaRecorder.stop();
        this.buttontext.text = "Start Recording";
        const blob = new Blob(recordedBlobs, { type: "video/webm" });
        upload(blob);
      }
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
}

#btnRecord {
  font-size: 16px;
  margin-left: 10px;

  font-weight: bolder;
}

.pageRightPanel {
  /*background-color: aqua;*/
  display: flex;
  flex-direction: column;
  flex: 2;
  font-family: "Atma";
  padding: 50px;
}

.pageFooter {
  /*background-color: peachpuff;*/

  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 50px;
}
</style>
