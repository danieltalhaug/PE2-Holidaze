<template>
    <div class="columns">
        <div class="column"></div>
        <div class="column is-narrow offset is-centered">
            <div class="field is-grouped">
                <div class="control search__field--wide">
                    <input list="hotelNames" v-model="searchWord" type="text" class="input is-rounded search__field--yellow" @keyup.enter="showResults" inputmode="search" placeholder="Search for a place to stay">
                    <datalist id="hotelNames">
                        <option v-for="(value , index) in hotels" v-bind:key="index" :value="value.establishmentName"></option><!-- Options looped from hotels array -->
                    </datalist>
                </div><!-- Control end -->
                <button class="button search__button search__button--round" @click="showResults">
                    <i class="fas fa-search has-text-black"></i>
                </button><!-- button end -->
            </div>
        </div>
        <div class="column"></div>
    </div>
</template>

<script>
export default {
    name: 'Searchbar',
    data() {
        return {
            hotels: this.$store.state.hotels,
            hotelSearch: "",
        }
    },
    computed: {
        searchWord: {
            get() {
                return this.$store.state.hotelSearch;
            },
            set(value) {
                this.$store.commit('updateSearchWord', value)
            }
        }
    },
    methods: {
        showResults: function() {
            // This function opens the search result. Couldn't figure out how to emit
            // it from the Hotel results component so I just placed it here.
            if(this.$store.state.hotelSearch === "") {
                // if hotelsearch is empty, do nothing
                return false;
            } else {
                // Show the hotel results
                const results = document.getElementById('hotelResults');
                results.style.display = 'block';
                results.style.height = 'auto';
                results.setAttribute('aria-hidden', 'false');
            }
        }
    }
}
</script>

<style lang="scss">
@import "./../scss/variables.scss";
[list]::-webkit-calendar-picker-indicator {
    display: none;
}
.offset {
    // fixes the annoying issue of having the button be outside and not counting in the column width
    transform: translateX(-45px);
    @media screen and (max-width: $br-medium) {
        transform: translateX(0);
    }
}
.search {
    &__field {
        &--wide {
            max-width: 350px;
            width: 100%;
            @media screen and (max-width: $br-medium) {
                max-width: 75%;
            }
        }
        &--yellow {
            border: 3px solid $accent;
        }
    }
    &__button {
        background-color: $accent;
        display:block;
        max-height: 60px;
        max-width: 60px;
        min-height: 60px;
        min-width: 60px;
        transform: translate(0, -12px);
        margin-left: 20px;
        border: 3px solid darken($accent, 5%);
        &:active {
            border: 3px solid $primary;
        }
        @media screen and (max-width: 370px) {
            // fixes the button disappearing off screen at tiny mobile sizes.
            margin-left: 0;
        }
        &--round {
            border-radius: 50%;
        }
    }
}
</style>
