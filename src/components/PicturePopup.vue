<template>
  <div>
    <gallery :images="images" :index="index" :options="options" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image.dataURL + ')',
        width: '240px',
        height: '180px'
      }"
    >
      <button v-on:click="removeImage(imageIndex)">X</button>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";


const indicatorOptions = {
  // The tag name, Id, element or querySelector of the indicator container:
  indicatorContainer: "ol",
  // The class for the active indicator:
  activeIndicatorClass: "active",
  // The list object property (or data attribute) with the thumbnail URL,
  // used as alternative to a thumbnail child element:
  thumbnailProperty: "thumbnail",
  // Defines if the gallery indicators should display a thumbnail:
  thumbnailIndicators: true
};

const fullscreenOptions = {
  // Defines if the gallery should open in fullscreen mode:
  fullScreen: false
};

export default {
  name: "PicturePopup",
  props: ["images"],
  data: function() {
    return {
      index: null,
      options: { ...fullscreenOptions, ...indicatorOptions }
    };
  },
  components: {
    gallery: VueGallery
  },
  methods: {
    removeImage: function(imageIndex){
      this.index = imageIndex;
      const url = this.images[this.index];
      URL.revokeObjectURL(url);
      this.images.splice(this.index, 1);
    }
  }
};
</script>

<style scoped>
.image {
  float: left;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

.image:hover {
  opacity:0.7;
}

button{
  opacity:0.3;
  float: right;
  margin: 2px;
  overflow: visible;
  width: 24px;
  height: 24px;
  text-align: left;
  color: black;
  font-size: 16px;
  font-weight: 900;
  border-color: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: transparent;
}

.image:hover button{
  opacity: 0.9;
}

.image:hover button{
  display: block;
  cursor: pointer;

}

/*.blueimp-gallery-display {
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 800px;
  margin-left: 300px;
  margin-top: 200px;
}

.blueimp-gallery > .slides {
  display: flex;
  flex: 1;
  top: 30px;
  left: 15px;
  margin-right: 300px;
  width: 500px;
  color: #fff;
  display: none;
}

.blueimp-gallery > .slides > .slide {
  position: inherit;
  height: 70%;
}

.blueimp-gallery > .description {
  position: absolute;
  top: 30px;
  left: 15px;
  color: #fff;
  display: none;
}
.blueimp-gallery-controls > .description {
  display: block;
}*/
</style>
