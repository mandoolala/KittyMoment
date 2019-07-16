<template>
  <mdb-container class="mt-5">
    <mdb-row>
      <!-- Grid column -->
      <mdb-col lg="4" md="6" class="mb-4" v-for="item in videos">
        <a @click="item.showModal = true">
          <video
            class="img-fluid z-depth-1"
            style="width: 340px;"
            v-bind:src="item.dataURL"
            alt="video"
            data-toggle="modal"
            data-target="#modal1"
            preload="metadata"
          ></video>
          <!--<img
            class="img-fluid z-depth-1"
            v-bind:src="item.ThumbnailURL"
            alt="video"
            data-toggle="modal"
            data-target="#modal1"
          />-->
        </a>
        <mdb-modal
          size="lg"
          :show="item.showModal"
          @close="item.showModal = false"
        >
          <mdb-modal-body class="mb-0 p-0">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <iframe
                class="embed-responsive-item"
                v-bind:src="item.dataURL"
                allowfullscreen
              >
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
import {
  mdbBtn,
  mdbCarousel,
  mdbCarouselCaption,
  mdbCarouselItem,
  mdbCol,
  mdbContainer,
  mdbIcon,
  mdbModal,
  mdbModalBody,
  mdbRow
} from "mdbvue";

export default {
  name: "VideoPopup",
  props: ["videos"],

  data() {
    return {};
  },
  components: {
    mdbBtn,
    mdbCarousel,
    mdbCarouselCaption,
    mdbCarouselItem,
    mdbCol,
    mdbContainer,
    mdbIcon,
    mdbModal,
    mdbModalBody,
    mdbRow
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .carousel-multi-item-2 .col-md-3 {
    float: left;
    width: 240px;
    height: 180px;
    margin-left: 200px;
  }
}

.carousel-multi-item-2 .card img {
  border-radius: 2px;
}

#showmodal{
  float: right;
  margin: 2px;
  overflow: visible;
  width: 70px;
  height: 70px;
  text-align: left;
  color: black;
  font-size: 16px;
  font-weight: 900;
  border-color: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: transparent;
}

video:hover{
  opacity:0.7;
  cursor:pointer;
}

figure {
  cursor: pointer;
}
</style>
