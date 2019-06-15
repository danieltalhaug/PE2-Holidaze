<template>
    <section class="section" id="hotelResults" aria-hidden="true">
      <div class="container"><!-- Hotel Search results below -->
        <h3 v-if="this.filteredHotels.length === 1" class="subtitle font-regular has-text-centered results-title">Showing {{ this.filteredHotels.length }} result</h3>
        <h3 v-else class="subtitle font-regular has-text-centered results-title">Showing {{ this.filteredHotels.length }} results</h3>
        <h4 v-if="filteredHotels.length === 0" class="subtitle has-text-centered">{{ this.searchError }} or <a href="#" @click="resetSearch">view all hotels.</a></h4>
        <div v-bind:id="'hotelResult' + index" v-for="(value , index) in filteredHotels" v-bind:key="index" class="box box-no-padding tile is-ancestor">
            <div class="tile is-parent is-3">
                <figure class="is-child image-container">
                    <img class="img-position" :src="value.imageUrl" :alt="value.establishmentName + ' Hotel image'">
                </figure> <!-- Child tile end -->
            </div><!-- Parent tile end -->
            <div class="tile is-parent tile-container">
                <div class="is-child">
                    <h3 class="title is-4 font-regular">{{ value.establishmentName }}</h3> <!-- Establishment Name -->
                    <p>{{ value.description }}</p> <!-- Hotel description -->
                </div><!-- Child tile end -->
            </div><!-- Parent tile end -->
            <div class="tile is-parent is-3 tile-container tile-container__border--gray">
                <div class="is-child has-text-centered price__center">
                    <h2 class="is-child has-text-success font-regular is-size-3">{{ value.price }} $</h2> <!-- Price -->
                    <span class="is-size-7 font-regular">Price per person per night <br>Max guests per night: {{ value.maxGuests }} <br></span><!-- Max guests -->
                    <router-link :to="{
                        name: 'Hotels',
                        params: { hotelsId: value.id,
                        establishmentName: value.establishmentName,
                        establishmentEmail: value.establishmentEmail,
                        imageUrl: value.imageUrl, 
                        price: value.price,
                        maxGuests: value.maxGuests,
                        googleLat: value.googleLat,
                        googleLong: value.googleLong,
                        description: value.description,
                        selfCatering: value.selfCatering } }"
                        class="button button--spacing button--yellow font-regular">View Hotel<i class="fas fa-angle-right icon-padding"></i>
                    </router-link><!-- View hotel button -->
                </div><!-- Child tile end -->
            </div><!-- Parent tile end -->
        </div><!-- Ancestor tile & looped item -->
        <span @click="closeResults" class="box close-results has-text-centered font-regular">close hotel results</span>
      </div><!-- Container end -->
    </section>
</template>
<script>
export default {
    name: 'HotelResults',
    data() {
        return {
            hotels: this.$store.state.hotels,
            searchError: 'Please try a different search term'
        }
    },
    methods: {
        closeResults: function() {
            const results = document.getElementById('hotelResults');
            results.style.display = 'none';
            results.style.height = '0';
            results.setAttribute('aria-hidden', 'true');
        },
        showResultsLength: function() {
            this.hotelResultNumber = this.filteredHotels.length;
        },
        resetSearch: function() {
            this.$store.commit('updateSearchWord', "")
        }
    },
    mounted: function() {
        // Get Hotels data from store and populate Hotels array
        this.hotels = this.$store.state.hotels;
    },
    computed: {
        filteredHotels: function() {
            // Fetch the search result from the vuex store
            let search = this.$store.state.hotelSearch;
            // Filter the hotel array and return the matched search
            return this.hotels.filter((hotel) => {
                return hotel.establishmentName.match(search);
            });
        },
    }
}
</script>
<style lang="scss">
@import "./../scss/variables.scss";
#hotelResults {
    display: none;
    height: auto !important;
    overflow: hidden;
}
.results-title {
    //moves the hotel results down and creates equal spacing above and below the hotel results title
    padding-bottom: 15px;
}
.close-results {
    cursor: pointer;
    &:hover {
        background-color: lighten($gray, 12%);
    }
}
.button {
  &--gradient {
    background-image: linear-gradient(180deg, $light-blue, $purple, $darker-blue);
    color: white;
  }
}
.is-ancestor {
    // adds margin between the cards
    margin: 1.5rem 0 1.5rem 0 !important;
}
.img-position {
    object-fit: cover;
    object-position: 0 0;
    width: 250px;
    height: 250px;
    border-radius: 5px;
    @media screen and (max-width: $br-medium) {
        width: 100%;
    }
}
.box-no-padding {
    // Removes the padding from the box class
    padding: 0 !important;
    margin: 1rem 0 1rem 0;
}
.is-parent {
    // Removes existing padding from the is parent class
    padding: 0 !important;
}
.image-container {
    height: 250px;
    width: 250px;
    margin-right: 10px;
    @media screen and (max-width: $br-medium) {
        width: 100%;
    }
}
.price__center {
    margin: 0 auto;
}
.button--spacing {
    margin: 20px 0 0 0;
    @media screen and (max-width: $br-medium) {
        margin: 20px 0 20px 0;
    }
}
.icon-padding {
    // Moves the button icon away from the text
    padding-left: 8px;
}
.tile-container {
    padding: 1rem 0 0 0 !important;
    margin: 0 1rem 0 1rem;
    &__border--gray {
        border-left: 1px solid $gray;
        @media screen and (max-width: $br-medium) {
            border-left: none;
            border-top: 1px solid $gray;
            margin-top: 1rem;
        }
    }
}
</style>
