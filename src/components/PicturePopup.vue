<template>
  <div class="picture-list">
      <div
              v-for="picture in pictures"
              class="thumbnail">
        <img :src="picture.image"/>
        <VueEasyLightbox
                  :visible="visible"
                  :imgs="imgs"
                  :index="index"
                  @hide="handleHide"
        ></VueEasyLightbox>

        <div class="thumbnail-info">
          <p>{{picture.created_At}}</p>
        </div>
      </div>

    </div>
</template>

<script>
    import VueEasyLightbox from 'vue-easy-lightbox'

  let pictures = [
    {
      id: 0,
      image: "https://placekitten.com/801/800",
      created_At: "201907120019"
    },
    {
      id: 1,
      image: "https://placekitten.com/802/800",
      created_At: "201907120020"
    },
    {
      id: 2,
      image: "https://placekitten.com/803/800",
      created_At: "201907120021"
    },

  ];
  export default {
    name: "PicturePopup",
      components: {
          VueEasyLightbox
      },

    data(){
      return{
        pictures,
        imgs: '',  // Img Url , string or Array
        visible: false,
        index: 0   // default
      }
    },
      methods:{
        clickMethod(){
            VueEasyLightbox.imgs = pictures[id].image
            VueEasyLightbox.index = pictures[id].id  // index of imgList
            VueEasyLightbox.show()
        },
        show() {
            VueEasyLightbox.visible = true
        },
        handleHide() {
            VueEasyLightbox.visible = false
        }
      }
  }


</script>

<style scoped>
  .thumbnail{
    display:flex;
  }
  .thumbnail img{
    width:168px;
  }

  .thumbnail-info{
    margin-left:20px;
  }

  .thumbnail h3{
    font-size:16px;
  }

  h3,
  p{
    margin:0;
    padding:0;
  }

  .video-player{
    display:flex;
    width:1200px;
    margin:auto;
  }

  .video-container{
    margin-right:40px;
  }

</style>