<template>
        <h1 class="title is-2 font-bold logo__font logo__font--color">{{ this.$store.state.logoText }}</h1>
</template>

<script>
export default {
    name: 'Logo'
}
</script>
<style lang="scss">
// Import SCSS variables
@import "./../scss/variables.scss";

//SCSS
.logo {
    &__font {
        font-family: $font-nimbus-sans;
        font-weight: $font-weight-regular;
        &--color {
        color: $primary !important;
        }
    }    
}

</style>
