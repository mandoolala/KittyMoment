<template>
    <div id="app">
        <a href="'http://http://placekitten.com/801/801/'+n" v-lightbox v-for="n in 9">
            <img src="'http://placekitten.com/400/300/'+n">
        </a>
        <lightbox></lightbox>
    </div>
</template>

<script>
    import Lightbox from './lightbox/Lightbox.vue'

    export default {
        components:{
            Lightbox
        },
        name: "Gallery2"
    }
</script>

<style scoped>

</style>