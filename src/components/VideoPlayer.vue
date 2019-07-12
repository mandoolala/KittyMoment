<template>
  <div class="video-player">
    <div class="video-list">
      <div
        @click="chooseVideo(video)"
        :key="video.id"
        v-for="video in videos"
        class="thumbnail"
      >
        <div class="thumbnail-img">
          <img :src="video.thumbnail" />
        </div>
        <div class="thumbnail-info">
          <p>{{ video.created_At }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const videos = [
  {
    id: 1,
    thumbnail: "https://placekitten.com/801/800",
    videoURL: "https://www.youtube.com/watch?v=CEHGj8Dp2_I",
    created_At: "201907112257"
  },
  {
    id: 2,
    thumbnail: "https://placekitten.com/802/800",
    videoURL: "https://www.youtube.com/watch?v=4DBaCEIAEHA",
    created_At: "201907112259"
  },
  {
    id: 3,
    thumbnail: "https://placekitten.com/803/800",
    videoURL: "https://www.youtube.com/watch?v=pkYa6RXjaMQ",
    created_At: "201907112301"
  }
];
export default {
  name: "VideoPlayer",
  data() {
    return {
      videos,
      activeVideo: videos[0]
    };
  },
  methods: {
    chooseVideo(video) {
      this.activeVideo = video;
    }
  }
};

/**
     * 이미지 썸네일을 불러오는 function
     * @param html : input 필드의 dom을 인자로 받는다. 물론 타입은 file
     * @param $target : 불러온 이미지를 적용할 jquery 객체.

    function getThumbnail(html, $target){
        if(html.files && html.files[0]){
            var reader = new FileReader();
            reader.onload = function (e){
                $target.css('background-image', 'url(\"' + e.target.result + '\")');
            }
            reader.readAsDataURL(html.files[0]);
        }
    }
    **/
</script>

<style scoped>
.thumbnail {
  display: flex;
}
.thumbnail img {
  width: 168px;
}

.thumbnail-info {
  margin-left: 20px;
}

.thumbnail h3 {
  font-size: 16px;
}

h3,
p {
  margin: 0;
  padding: 0;
}

.video-player {
  display: flex;
  width: 1200px;
  margin: auto;
}

.video-container {
  margin-right: 40px;
}
</style>
