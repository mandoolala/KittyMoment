<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Tab 1" active>
                    <b-card-text>Tab Contents 1</b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <!-- 여기에 video list -->
                    <b-card-text>Tab Contents 2</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Gallery"
    }
</script>

<style scoped>

</style>