<template>
  <div>
    <section>
      <Hero /><!-- Hero image and search function -->
      <HotelResults /><!-- Hotel Results -->
    </section>
    <section class="section">
      <h3 class="title is-3 font-bold has-text-centered section-title">{{ this.$store.state.visitBergen.title }}</h3>
      <div class="container">
        <section class="columns is-variable is-8">
          <ThingsToDo v-for="(value , index) in locations1" v-bind:key="index"
          v-bind:title="value.title"
          v-bind:content="value.content"
          v-bind:image="value.image"
          v-bind:imageAlt="value.imageAlt" />
        </section>
        <section class="columns section-margin is-variable is-8">
          <ThingsToDo v-for="(value , index) in locations2" v-bind:key="index"
          v-bind:title="value.title"
          v-bind:content="value.content"
          v-bind:image="value.image"
          v-bind:imageAlt="value.imageAlt" />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState } from 'vuex'
import Hero from '@/components/Hero.vue'
import ThingsToDo from '@/components/ThingsToDo.vue'
import HotelResults from '@/components/HotelResults.vue'

export default {
  name: 'home',
  components: {
    Hero,
    ThingsToDo,
    HotelResults
  },
  data() {
    return {
      locations1: [],
      locations2: []
    }
  },
  methods: {

  },
  beforeMount: function() {
    this.locations1 = this.$store.state.visitBergen.locations1;
    this.locations2 = this.$store.state.visitBergen.locations2;
  },
  mounted() {
    
  },
  computed: {
    // Get hotels data from vuex
    // ...mapState({
    //   hotels: state => state.hotels
    // })
  }
}
</script>

<style lang="scss">
@import "./../scss/variables.scss";
#hotelResults {
  height: auto;
}
.section-margin {
  margin: 2rem 0 0 0;
}
.section-title {
  padding: 0 0 30px 0; // raises the title by x amount
}
.row {
  display: flex;
  flex-direction: column,
}
</style>

