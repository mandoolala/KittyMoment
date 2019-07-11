<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Picture" active>
                    <!-- 여기에 picture list -->
                    <PicturePopup2></PicturePopup2>
                </b-tab>
                <b-tab title="Video">
                    <!-- 여기에 video list -->
                    <VideoPlayer></VideoPlayer>

                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    import VideoPlayer from "./VideoPlayer";
    import PicturePopup from "./PicturePopup"
    import PicturePopup2 from "./PicturePopup2"
    export default {
        name: "Gallery",
        components: {VideoPlayer, PicturePopup, PicturePopup2},
    }
</script>

<style scoped></style>
