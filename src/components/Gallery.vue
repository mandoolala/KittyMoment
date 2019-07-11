<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Picture" active>
                    <!-- 여기에 picture list -->
                    <b-card-text>Tab Contents 1</b-card-text>
                </b-tab>
                <b-tab title="Video">
                    <!-- 여기에 video list -->
                    <b-card-text>Tab Contents 2</b-card-text>

                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
    }
</script>

<style scoped></style>
