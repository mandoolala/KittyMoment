<template>
    <div>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', width: '240px', height: '180px' }"
        ></div>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        data: function () {
            return {
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
                    'https://placekitten.com/810/800'
                ],
                index: null
            };
        },

        components: {
            'gallery': VueGallery
        },
    }
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