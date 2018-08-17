<template>
    <div>
        <h4 v-for="image in allImages" :key="image.id">
            <h6>{{ image.name }} <a :href="image.link" target="_blank">LINK</a></h6>
            <img v-bind:src="image.link"/>
        </h4>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']), // syntax: short form, single method mapped
    computed: { // syntax: longer form, allows methods in addition to those returned by mapGetters
        ...mapGetters(
            ['allImages']
        )
    },
    created() {
        this.fetchImages();
    }
};
</script>

<style>
</style>
