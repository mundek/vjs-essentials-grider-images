<template>
    <div>
        <div v-if='isLoggedIn' class="image-container">
            <h4 v-for="image in allImages" :key="image.id">
                <!-- <h6>{{ image.name }} <a :href="image.link" target="_blank">LINK</a></h6> -->
            <img v-bind:src="image.link"/>
            </h4>
        </div>
        <h2 v-else>Log in to get started.</h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']), // syntax: short form, single method mapped
    computed: { // syntax: longer form, allows methods in addition to those returned by mapGetters
        ...mapGetters(
            ['allImages', 'isLoggedIn']
        )
    },
    created() {
        this.fetchImages();
    }
};
</script>

<style scoped>
.image-container {
    column-count: 3;
    column-gap: 0;
}
img {
    max-width: 100%;
    padding: 5px;
}
</style>
