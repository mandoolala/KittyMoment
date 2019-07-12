<template>
    <div v-if="loading">Chargement...</div>
        <img : src="src" class="lightbox_image" :style="style">
</template>

<script>
    export default {
        props:{
            image: String
        },
        data() {
            return {
                loading: true,
                src: false,
                style : {}
            }
        },
        methods:{
            resizeImage(image){
                let width = image.width
                let height = image.height
                if(width > window.innerWidth || height > window.innerHeight){
                    let ratio = width/height
                    let windowRatio = window.innerwidth/window.innerHeight
                    if(ratio > windowRatio){
                        width = window.innerWidth
                        height = width/ratio
                    } else{
                        height = window.innerHeight
                        width = height * ratio
                    }
                }
                this.style = {
                    width: width + 'px',
                    height: height + 'px',
                    top: ((window.innerHeight - height) * 0.5) + 'px',
                    left: ((window.innerWidth - width) * 0.5) + 'px'
                }
            }
        },
        mounted(){
            let image = new window.Image()
            let resizeImage = image => {

            }
            image.onload = () => {
                this.loading = false
                this.src = this.image
                resizeImage(image)

            }

            image.src = this.image
        }
    }

</script>

<style>
    .lightbox_image{
        position: fixed;

    }

</style>