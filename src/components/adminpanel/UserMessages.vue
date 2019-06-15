<template>
    <div v-if="userMessages.length <= 1" class="container"> <!-- If there are no messages other than the test input show this -->
        <div class="columns is-centered">
            <div class="column is-half has-text-centered">
                <h2 class="title is-4">No user messages at this time</h2>
                <h3 class="subtitle is-6">This will automatically update when a user submits a message.</h3>
            </div>
        </div>
    </div>
    <div v-else> <!-- If there are messages show this -->
        <div class="container">
            <div class="is-flex is-flex__wrap">
                <div v-bind:id="'userMessage' + index" v-for="(value , index) in userMessages" v-bind:key="index" class="box-improved content messages messages__width">
                    <button @click="hideMessage('userMessage' + index)" class="delete is-pulled-right is-small"></button>
                    <p class="font-bold"># {{ index }}</p>
                    <h3 class="title is-4">{{ value.clientName }}</h3>
                    <h4 class="subtitle is-6">{{ value.email }}</h4>
                    <p class="messagebox font-regular is-size-5">{{ value.message }}</p>
                    <a v-bind:href="'mailto:' + value.email" class="button button--blue is-pulled-right"><i class="fas fa-envelope icon__padding"></i>Reply</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UserMessages',
    data: function() {
        return {
            userMessages: []
        }
    },
    methods: {
        hideMessage: function(id) {
            document.getElementById(id).style.display = 'none';
        }
    },
    beforeMount() {
        // enquiryData is populated from the store. 
        this.userMessages = this.$store.state.userMessages;
    },
    mounted() {
        // Run the hide message function with message number 0 as a parameter
        this.hideMessage('userMessage0');
    }
}
</script>
<style lang="scss">
@import "./../../scss/variables.scss";
.messages {
    &__width {
    width: 20rem;
    height: 23rem;
    @media screen and (max-width: $br-medium) {
        width: 100%;
        height: auto;
        }
    }
    &:nth-child(odd) {
        background-color: lighten($gray, 12%) !important;
    }
}
.messagebox {
    height: 150px;
    overflow: auto;
    @media screen and (max-width: $br-medium) {
        height: auto;
        overflow: visible;
        }
}
.icon__padding {
    padding-right: 5px;
}
</style>
