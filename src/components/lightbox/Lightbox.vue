<template>
    <div class="lightbox" v-if="image">
        <lightbox-image :image="image"></lightbox-image>

    </div>
</template>

<script>
    import './LightboxDirective'
    import store from './LightboxStore'
    import LightboxImage from './LightboxImage'

    export default{
        components:{
            LightboxImage
        },

        data(){
            return{
                state:store.state
            }
        },
        computed:{
            image(){
                if(this.state.index !== false){
                    return this.state.images[this.state.index]
                }
            }
        }
    }
</script>

<style>


</style>