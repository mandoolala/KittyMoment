<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '240px',
        height: '180px'
      }"
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import firebase from 'firebase';


export default {
  data: function() {
    return {
      images: [
        "https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/images%2Fimage_1.jpg?alt=media&token=f917deba-7910-4ceb-ab78-0057074972ef",
        "https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/images%2F07-13-2019%201%3A31%3A28?alt=media&token=e82edc9d-3409-4d55-ab3a-2d35c6de2b72",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800",
        "https://placekitten.com/810/800"
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
