<template>
    <section class="hero__container hero__container--image">
        <div class="columns is-centered">
            <div class="column is-half has-text-centered hero__content--position">
                <h1 class="title is-1 has-text-white font-bold">{{ this.$store.state.heroText.h1 }}</h1>
                <h2 class="subtitle is-3 has-text-white font-light">{{ this.$store.state.heroText.h2 }}</h2>
            </div>
        </div>
        <div class="column">
            <Searchbar />
        </div>
    </section>
</template>

<script>
import Searchbar from './Searchbar.vue'
export default {
    name: 'Hero',
    components: {
        Searchbar
    }
}
</script>

<style lang="scss">
.hero {
    &__container {
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &--image {
        background-image: linear-gradient(rgba(111, 177, 252, 0.7),rgba(67, 100, 247, 0.7), rgba(0, 82, 212, 0.5)), url("./../assets/leonard-rb-1281440-unsplash.jpg");
        }
    }
    &__content {
        &--position {
            padding-top: 15vh;
        }
    }
}
</style>
