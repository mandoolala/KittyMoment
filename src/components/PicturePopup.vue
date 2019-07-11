<template>
  <!--https://github.com/mirari/v-viewer 참고 -->
  <!--https://vuejsexamples.com/responsive-gallery-component-for-vuejs/ 참고-->
  <div id="app">
    <img
      class="image"
      v-for="(image, i) in images"
      :src="image"
      @click="onClick(i)"
    />
    <vue-gallery-slideshow
      :images="images"
      :index="index"
      @close="index = null"
    ></vue-gallery-slideshow>
  </div>
</template>

<script>
export default {
  name: "picture-popup"
};

/*
    new Vue({
        el: '#app',
        components: {
            VueGallerySlideshow
        },
        methods: {
            onClick(i) {
                this.index = i;
            }
        },
        data: {
            images: [
                'https://placekitten.com/801/800',
                'https://placekitten.com/802/800',
                'https://placekitten.com/803/800',
                'https://placekitten.com/804/800',
                'https://placekitten.com/805/800',
                'https://placekitten.com/806/800',
                'https://placekitten.com/807/800',
                'https://placekitten.com/808/800',
                'https://placekitten.com/809/800',
                'https://placekitten.com/810/800',
            ],
            index: 0
        }
    })
     */
</script>

<style scoped>
body {
  font-family: sans-serif;
}

.image {
  width: 100px;
  height: 100px;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>
