<template>
    <div>
        <gallery
                :images="images"
                :index="index"
                :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
                @close="index = null"
        ></gallery>
        <div
                class="image"
                v-for="image, imageIndex in images"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image.poster + ')', width: '300px', height: '200px' }"
        ></div>
    </div>
</template>

<script>
    import VueGallery from "vue-gallery";

    export default {
        data: function() {
            return {
                images: [
                    {
                        title: 'A YouYube video',
                        href: './assets/Videos/video_1.mp4',
                        type: 'text/html',
                        youtube: 'hNdlUHBJDKs',
                        poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
                    },
                    {
                        title: 'A YouYube video 2',
                        href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
                        type: 'text/html',
                        youtube: 's5iUsaPPtnk',
                        poster: 'https://img.youtube.com/vi/s5iUsaPPtnk/maxresdefault.jpg'
                    },
                    {
                        title: 'Image',
                        href: 'https://dummyimage.com/1600/ffffff/000000',
                        type: 'image/jpeg',
                        poster: 'https://dummyimage.com/350/ffffff/000000'
                    }
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