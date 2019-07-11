<template>
    <div id="app">
        <div class="container">
            <div class="gallery">
                <div
                        v-for="(src, index) in imgs"
                        :key="index"
                        class="pic"
                        @click="() => show(index)"
                >
                    <img :src="src">
                </div>
            </div>

            <vue-easy-lightbox
                    :visible="visible"
                    :index="index"
                    :imgs="imgs"
                    @hide="handleHide"
            ></vue-easy-lightbox>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                imgs: [
                    'https://i.loli.net/2018/11/10/5be6852cdb002.jpeg',
                    'https://i.loli.net/2018/11/10/5be6852ce6965.jpeg',
                    'https://i.loli.net/2018/11/10/5be6852dec46e.jpeg',
                    'https://i.loli.net/2018/11/10/5be6852e1366d.jpeg',
                    'https://i.loli.net/2018/11/10/5be6852e33f19.jpeg',
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
                visible: false,
                index: 0 // default
            }
        },
        methods: {
            show (index) {
                this.index = index
                this.visible = true
            },
            handleHide () {
                this.visible = false
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        color: #50d1c1;
    }
    .gallery{
        width: 80%;
        max-width: 980px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .pic{
        width: 130px;
        margin: 10px;
        cursor: pointer;
    }
    .pic:hover img{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0);
        transform: scale(1.01)
    }
    img{
        width: 100%;
        transition: .3s ease;
    }
    .btn{
        cursor: pointer;
        outline: none;
        text-decoration: none;
        text-align: center;
        font-size: 20px;
        line-height: 50px;
        height: 50px;
        padding: 0 8px;
        margin-left: 20px;
        background-color: #50d1c1;
        border-color: #50d1c1;
        border-radius: 4px;
        color: #FFF;
        transition: .3s;
    }
    .btn:active{
        color: #ccc;
        background-color: #6AB5AE;
        border-color: #6AB5AE;
        outline: none;
    }
</style>
