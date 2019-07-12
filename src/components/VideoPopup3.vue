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
                        href: 'https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/videos%2Fvideo_2.m4v?alt=media&token=3dc62221-320a-4539-9c87-3b22d615aa2d',
                        type: 'text/html',
                        youtube: 'hNdlUHBJDKs',
                        poster: 'https://firebasestorage.googleapis.com/v0/b/kittymoments.appspot.com/o/images%2Fimage_11.jpg?alt=media&token=3d58097a-4b22-46a7-9be6-1b20757753dc'
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