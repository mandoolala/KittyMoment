<template>
    <div id="app">
        <gallery>

        </gallery>
    </div>
</template>

<script>
    import Gallery from "./components/Gallery.vue";
    import LiveStream from "./components/LiveStream.vue";
    import PicturePopup from "./components/PicturePopup.vue";
    import VideoPopup from "./components/VideoPopup.vue";
    import "bootstrap/dist/css/bootstrap.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";

    export default {
        name: 'App',
        components: {
            Gallery,
            LiveStream,
            PicturePopup,
            VideoPopup
        },
        data(){
            return {
                picture: {
                    image: "",
                    created_At: "",
                },
                video: {
                    image: "",
                    created_At: "",
                },
            }
        },
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>