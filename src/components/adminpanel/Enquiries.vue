<template>
    <div v-if="enquiryData.length <= 1"> <!-- If there are no more enquiries than the test input show this -->
        <div class="columns is-centered">
            <div class="column is-half has-text-centered">
                <h2 class="title is-4">No Enquiries at this time</h2>
                <h3 class="subtitle is-6">This will automatically update when a user submits an inquiry.</h3>
            </div>
        </div>
    </div>
    <div v-else> <!-- If there are enquiries show this -->
        <div class="container">
            <div class="is-flex is-flex__wrap">
                <div v-bind:id="'userEnquiry' + index" v-for="(value , index) in enquiryData" v-bind:key="index" class="box-improved width">
                    <button @click="hideEnquiry('userEnquiry' + index)" class="delete is-pulled-right is-small"></button>
                    <table class="table is-striped is-hoverable width">
                        <thead>
                            <tr>
                                <th class="font-bold">User Inquiry</th>
                                <td class="font-bold"># {{ index }}</td>
                            </tr>
                        </thead>
                        <tbody class="tbody">
                            <tr>
                                <th>Establishment:</th>
                                <td class="font-regular">{{ value.establishment }}</td>
                            </tr>
                            <tr>
                                <th>Client Name:</th>
                                <td class="font-regular">{{ value.clientName }}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td class="font-regular">{{ value.email }}</td>
                            </tr>
                            <tr>
                                <th>Check in:</th>
                                <td class="font-regular">{{ value.checkin }}</td>
                            </tr>
                            <tr>
                                <th>Check out:</th>
                                <td class="font-regular">{{ value.checkout }}</td>
                            </tr>
                        </tbody>
                    </table><!--table end -->
                </div>
            </div><!-- Flex container end -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'Enquiries',
    data: function() {
        return {
            enquiryData: []
        }
    },
    methods: {
        hideEnquiry: function(id) {
            document.getElementById(id).style.display = 'none';
        }
    },
    beforeMount() {
        // enquiryData is populated from the store. 
        this.enquiryData = this.$store.state.enquiries;
    },
    mounted: function() {
        // Run the Hide test card function
        this.hideEnquiry('userEnquiry' + 0);
    }
}
</script>
<style lang="scss">
@import "./../../scss/variables.scss";
.box-improved {
    padding: 1rem;
    margin: .5rem;
    border: 1px solid $gray;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}
.is-flex {
    &__wrap {
        flex-wrap: wrap; // fixes the issue with cards dissappearing off screen. They now jump to a second line if the column is full.
    }
}
.table {
    width: 500px;
    table-layout: fixed;
}
.width {
    @media screen and (max-width: $br-medium) {
        width: 100%;
    }
}
</style>
