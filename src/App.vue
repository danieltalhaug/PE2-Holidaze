<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navigation,
    Footer
  },
  beforeMount: function() {
    this.$store.dispatch('getHotels');
  },
  
}
</script>


<style lang="scss">
// My own variables. Make changes to Bulma variables here.
@import "./scss/variables.scss";
// Import Bulma for use in the entire project

@import "~bulma/bulma.sass";
@import '~bulma-tooltip';


* {
  font-family: $font-nimbus-sans;
  font-weight: $font-weight-light !important;
}

.font-bold {
  font-weight: $font-weight-bold !important;
}
.font-regular {
  font-weight: $font-weight-regular !important;
}
.font-light {
  font-weight: $font-weight-light !important;
}
body {
  background-color: lighten($gray, 12%);
}
.min-height {
  // sets the minimum height so that the footer is placed at the bottom of the screen. 
  min-height: 85vh;
}
.button--yellow {
    background-color: $accent;
    &:hover {
        background-color: darken($accent, 5%);
    }
}
</style>
