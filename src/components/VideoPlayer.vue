<template>

  <mdb-container class="mt-5">
    <mdb-row>
      <!-- Grid column -->
      <mdb-col lg="4" md="6" class="mb-4" v-for="item in videos">
        <a @click="item.showModal = true">
          <img class="img-fluid z-depth-1"
               v-bind:src="item.thumbnail"
               alt="video"
               data-toggle="modal"
               data-target="#modal1">
        </a>
        <mdb-modal size="lg"
                   :show="item.showModal"
                   @close="item.showModal = false">
          <mdb-modal-body class="mb-0 p-0">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe class="embed-responsive-item"
                      v-bind:src="item.video"
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
          {video:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/videos%2Fvideo_1.mp4?alt=media&token=c9d2886f-e365-48e8-972c-f1a85f5b43d4",
            thumbnail:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/images%2Fimage_1.jpg?alt=media&token=f917deba-7910-4ceb-ab78-0057074972ef",
            showModal: false
          },
          {video:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/videos%2Fvideo_2.m4v?alt=media&token=3dc62221-320a-4539-9c87-3b22d615aa2d",
            thumbnail:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/images%2Fimage_2.jpg?alt=media&token=56883206-32c4-4ffa-9e88-6796bed47a0a",
            showModal: false
          },
          {video:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/videos%2Fvideo_3.m4v?alt=media&token=c5f15582-202a-4cf5-97da-b77d966efda9",
            thumbnail:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/images%2Fimage_3.jpg?alt=media&token=01bf35c6-268e-4418-9e9c-38be12c6e27b",
            showModal: false
          },
          {video:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/videos%2Fvideo_4.m4v?alt=media&token=9082e901-138c-4baa-b147-2f7aa48ce4b6",
            thumbnail:"https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/images%2Fimage_4.jpg?alt=media&token=092656f1-6f73-46a3-a76d-52150dc21fe3",
            showModal: false
          }
        ],
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