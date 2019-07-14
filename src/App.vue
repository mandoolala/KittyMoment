<template>
  <div id="app">
    <div class="page">
      <div class="pageHeader">
        <h1>Kitty Moments</h1>
      </div>
      <div class="pageMain">
        <div class="pageContent">
          <h2>Live Streaming</h2>
          <img crossorigin="anonymous" id="video" src="http://1.246.1.243:9000/stream/video.mjpeg" />
          <div class="pageButton">
            <toggle-button
                    :value="false"
                    color="#FF82A3"
                    :sync="true"
                    :labels="true"/>

            <p align="right">
              <button id="btnCapture" v-on:click="imageCapture"> CAPTURE </button>
              <button id="btnRecord"> RECORD </button>
            </p>
          </div>
        </div>
        <div class="pageRightPanel">
          <h2>Gallery</h2>
          <gallery2 />
        </div>
      </div>


      <div class="pageFooter" />
    </div>
  </div>
</template>

<script>
import Gallery2 from "./components/Gallery2.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
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


export default {
  name: "App",
  components: {
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
  },
  methods: {
    imageCapture: function(event){

      const timestamp = moment(new Date()).format("MM-DD-YYYY h:mm:ss");
      const CaptureRef = imagesRef.child(timestamp);

      fetch("http://192.168.0.39:9000/stream/snapshot.jpeg")
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
          // Here's where you get access to the blob
          // And you can use it for whatever you want
          // Like calling ref().put(blob)

          CaptureRef.put(blob);

          // Here, I use it to make an image appear on the page
          // let objectURL = URL.createObjectURL(blob);
          // let myImage = new Image();
          // myImage.src = objectURL;
          // document.getElementById('myImg').appendChild(myImage)
        });



    }
  }
};

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bad+Script|Lobster|Lobster+Two|Merienda|Pacifico|Rancho|Satisfy|Sniglet|Tangerine|Varela+Round&display=swap");
@import url('https://fonts.googleapis.com/css?family=Atma|Crafty+Girls|Delius+Swash+Caps|Gabriela|Sunshiney|Unkempt&display=swap');

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
  background-image: url("./assets/back2.jpg");
  background-repeat: no-repeat;
  background-size:100%;
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
  float: left;
  clear: none;
  font-family: "Atma";
  font-weight: 800;
  font-size: 100px;
  min-height: 150px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

h1 {
  display: block;
  font-size: 50px;
  /*
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  */
  font-weight: bold;
}

.pageMain {
  display:flex;
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
  font-size: 30px;
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
  flex:3;
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
  float: left;
  width: 100%;
  clear: none;
  display: flex;
  flex-direction: row;
  min-height: 50px;
}



</style>
