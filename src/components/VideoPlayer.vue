<template>
  <mdb-container class="mt-5">
    <mdb-row>
      <!-- Grid column -->
      <mdb-col lg="5" md="6" class="mb-4" v-for="(item, index) in videos">
        <a @click="showModal = true">
          <img class="img-fluid z-depth-1"
               src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
               alt="video"
               data-toggle="modal"
               data-target="#modal1">
        </a>
        <mdb-modal size="lg"
                   :show="showModal"
                   @close="showModal = false">
          <mdb-modal-body class="mb-0 p-0">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe class="embed-responsive-item"
                      src="https://www.youtube.com/watch?v=vgbxL_WSoQ8"
                      allowfullscreen>
              </iframe>
            </div>
          </mdb-modal-body>
        </mdb-modal>
      </mdb-col>
      <!-- Grid column -->
    </mdb-row>
  </mdb-container>
</template>

style
<script>
  import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbLightbox, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbCard, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbNavItem } from "mdbvue";
  export default {
    name: "GalleryPage",
    data() {
      return {
        videos:[
          {video:"https://www.youtube.com/embed/A3PDXmYoF5U",
            thumbnail:"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"},
          {video:"https://www.youtube.com/embed/A3PDXmYoF5U",
            thumbnail:"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"},
          {video:"https://www.youtube.com/embed/A3PDXmYoF5U",
            thumbnail:"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"},
          {video:"https://www.youtube.com/embed/A3PDXmYoF5U",
            thumbnail:"https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"}
        ],
        showModal: false,
      };
    },
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon,
      mdbBtn,
      mdbLightbox,
      mdbCarousel,
      mdbCarouselItem,
      mdbCarouselCaption,
      mdbCard,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbNavItem
    }
  }
</script>

<style scoped>
  @media (min-width: 768px) {
    .carousel-multi-item-2 .col-md-3 {
      float: left;
      width: 25%;
      max-width: 100%; } }

  .carousel-multi-item-2 .card img {
    border-radius: 2px; }

  figure {
    cursor: pointer;
  }
</style>