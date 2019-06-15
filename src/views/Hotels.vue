<template>
    <main class="container background--white background--height">
        <div class="columns">
            <div class="column is-6">
                <img class="hotel-image" :src="$route.params.imageUrl" :alt="$route.params.establishmentName + ' hotel image'"><!-- hero image -->
            </div><!-- Column end -->
            <div class="column is-6">
                <h2 class="title is-2 font-regular">{{ $route.params.establishmentName }}</h2>
                <p class="content is-size-5">{{ $route.params.description }}</p>
                <div class="columns is-gapless">
                    <div class="column has-text-centered">
                        <ul class="list__padding">
                            <li><i class="fas fa-tag is-size-3 has-text-primary"></i></li>
                            <li>{{ this.pricePerNight }}:</li>
                            <li class="is-size-3 has-text-success">{{ $route.params.price }} &#36;</li>
                        </ul>
                    </div><!-- Column end -->
                    <div class="column has-text-centered">
                        <ul class="list__padding">
                            <li><i class="fas fa-users is-size-3 has-text-primary"></i></li>
                            <li>{{ this.guests }}:</li>
                            <li class="is-size-3">{{ $route.params.maxGuests }}</li>
                        </ul>
                    </div><!-- Column end -->
                    <div class="column has-text-centered">
                        <ul class="list__padding">
                            <li><i class="fas fa-concierge-bell is-size-3 has-text-primary"></i></li>
                            <li>{{ this.catering }}:</li>
                            <li class="is-size-3">{{ $route.params.selfCatering }}</li>
                        </ul>
                    </div><!-- Column end -->
                </div><!-- Columns end -->
                <div class="column">
                <iframe id="googleMap" class="map"
                frameborder="0" style="border:0"
                :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyBh1wMD0gDp6zrFFZ8udMdOxjA2Xv23b6k&q='+ $route.params.googleLat +','+ $route.params.googleLong +'&zoom=12'" allowfullscreen>
                </iframe>
            </div><!-- Column end -->
        </div><!-- Columns end -->
        </div><!-- Columns end -->
        <div class="columns" id="enquireColumn" aria-hidden="false">
            <div class="column has-text-centered">
                    <h3 class="subtitle is-4">Want to enquire about this hotel?</h3>
                    <button @click="hideEnquire" class="button button--yellow font-regular">Enquire</button>
            </div><!-- Enquire end -->
        </div><!-- Column end -->
        <div id="formColumn" class="columns">
            <div class="column form__border form__edges is-6 is-offset-3" aria-hidden="true">
                <div class="has-text-centered">
                    <h3 class="title is-3">{{ this.form.formTitle }}</h3>
                    <h4 class="subtitle is-5">{{ this.form.formSubtitle }}</h4>
                </div>
                <form method="POST" @submit="validateForm" action="http://localhost/holidaze/src/server/enquiry-success.php" class="form">
                    <div class="field">
                        <div class="control">
                            <label for="establishment" class="label">Establishment</label>
                            <input  type="text"
                                    id="establishment"
                                    name="establishment"
                                    class="input is-disabled"
                                    :value="$route.params.establishmentName"
                                    readonly><!-- Establishment input -->
                        </div>
                    </div><!-- Establishment control end @submit.prevent="validateForm" -->
                    <div class="field is-horizontal">
                        <div class="control control-right is-expanded">
                            <label for="clientName" class="label">Full Name</label>
                            <input  class="input"
                                    name="clientName"
                                    id="clientName"
                                    :class="{ 'is-danger': form.validate.fullName.error, 'is-success': form.validate.fullName.success }"
                                    v-model="form.validate.fullName.input"
                                    @keyup="validateFullName"
                                    type="text"
                                    placeholder="Full name"><!-- Full name input -->
                            <span v-if="form.validate.fullName.required" class="help is-danger">Required</span><!-- Fullname required -->
                            <span v-if="form.validate.fullName.error" class="help">{{ this.form.validate.fullName.helpText }}</span>
                        </div>
                        <div class="control control-left is-expanded">
                            <label for="email" class="label">Email</label>
                            <input  class="input"
                                    name="email"
                                    id="email"
                                    :class="{ 'is-danger': form.validate.email.error, 'is-success': form.validate.email.success }"
                                    v-model="form.validate.email.input"
                                    @keyup="validateEmail"
                                    type="email"
                                    inputmode="email"
                                    placeholder="Email"><!-- Email input -->
                            <span v-if="form.validate.email.required" class="help is-danger">Required</span><!-- Email Required -->
                            <span v-if="form.validate.email.error" class="help">{{ this.form.validate.email.helpText }}</span>
                        </div>
                    </div><!-- Name and Email control end -->
                    <div class="field is-horizontal">
                        <div class="control control-right is-expanded">
                            <label for="checkin" class="label">Check in</label>
                            <input  class="input"
                                    name="checkin"
                                    id="checkin"
                                    :class="{ 'is-danger': form.validate.checkIn.error, 'is-success': form.validate.checkIn.success }"
                                    v-model="form.validate.checkIn.input"
                                    @keyup="validateCheckIn"
                                    type="date"
                                    inputmode="numeric"
                                    placeholder="dd/mm/yyyy"><!-- Checkin input -->
                            <span v-if="form.validate.checkIn.required" class="help is-danger">Required</span><!-- Check in Required -->
                            <span v-if="form.validate.checkIn.error" class="help">{{ this.form.validate.checkIn.helpText }}</span>
                        </div>
                        <div class="control control-left is-expanded">
                            <label for="checkout" class="label">Check out</label>
                            <input  class="input"
                                    name="checkout"
                                    id="checkout"
                                    :class="{ 'is-danger': form.validate.checkOut.error, 'is-success': form.validate.checkOut.success }"
                                    v-model="form.validate.checkOut.input"
                                    @keyup="validateCheckOut"
                                    type="date"
                                    inputmode="numeric"
                                    placeholder="dd/mm/yyyy"><!-- Checkout input -->
                            <span v-if="form.validate.checkOut.required" class="help is-danger">Required</span><!-- Check out Required -->
                            <span v-if="form.validate.checkOut.error" class="help">{{ this.form.validate.checkOut.helpText }}</span>
                        </div>
                    </div><!-- Date Field end -->
                    <div class="control">
                        <button id="submitButton" type="submit" class="button button--yellow font-regular is-pulled-right disabled">Submit</button>
                    </div><!-- Button control end -->
                </form><!-- Form end -->
            </div>
        </div>
    </main><!-- Main end -->
</template>
<script>
export default {
    name: 'Hotels',
    data() {
        return {
            pricePerNight: 'Price per night',
            guests: 'Max Guests',
            email: 'Email',
            catering: 'Self catering',
            form: {
                formTitle: 'Enquire about this hotel',
                formSubtitle: 'Fill in the information below and we\'ll get back to you soon.',
                validate: {
                    fullName: {
                        input: '',
                        required: false,
                        error: false,
                        success: false,
                        helpText: 'Two names minimum'
                    },
                    email: {
                        input: '',
                        required: false,
                        error: false,
                        success: false,
                        helpText: 'Enter valid email: example@holidaze.com'
                    },
                    checkIn: {
                        input: '',
                        required: false,
                        error: false,
                        success: false,
                        helpText: 'Enter date: dd/mm/yyyy'
                    },
                    checkOut: {
                        input: '',
                        required: false,
                        error: false,
                        success: false,
                        helpText: 'Enter date: dd/mm/yyyy'
                    }
                }
            }
        }
    },
    props: [
        'hotelsId',
        'establishmentName',
        'establishmentEmail',
        'imageUrl',
        'price',
        'maxGuests',
        'googleLat',
        'googleLong',
        'description',
        'selfCatering'
    ],
    methods: {
        disableButton: function() {
            const submitButton = document.getElementById('submitButton');
            submitButton.disabled = true;
        },
        hideEnquire: function() {
            const enquire = document.getElementById('enquireColumn');
            enquire.style.opacity = 0;
            // Hides the content but only after the transition is complete.
            setTimeout(function(){
                // Hides the enquire column
                const enquire = document.getElementById('enquireColumn');
                enquire.style.display = 'none';
                // Set aria hidden to true
                enquire.setAttribute('aria-hidden', 'true');
                // Shows the Form column
                const form = document.getElementById('formColumn');
                form.style.display = 'block';
                form.style.height = 'auto';
                // Set aria hidden to false
                form.setAttribute('aria-hidden', 'false');
            }, 200);
        },
        validateFullName: function() {
            // Test to see if field is empty
            if(this.form.validate.fullName.input.length === 0) {
                // trigger required
                this.form.validate.fullName.required = true;
                this.form.validate.fullName.error = false;
                this.form.validate.fullName.success = false;
                return false;
            } else {
                // If the field is not empty
                const fullNameRegex = /^(\w.+\s).+$/;
                let testResult = fullNameRegex.test(this.form.validate.fullName.input);
                if(!testResult) {
                    // If testresult is false
                    // Trigger error
                    this.form.validate.fullName.required = false;
                    this.form.validate.fullName.error = true;
                    this.form.validate.fullName.success = false;
                    return false;
                } else {
                    // test result is true
                    // Trigger success
                    this.form.validate.fullName.required = false;
                    this.form.validate.fullName.error = false;
                    this.form.validate.fullName.success = true;
                    return true;
                }
            }
        },
        validateEmail: function() {
            // Test to see if field is empty
            if(this.form.validate.email.input.length === 0) {
                // trigger required
                this.form.validate.email.required = true;
                this.form.validate.email.error = false;
                this.form.validate.email.success = false;
                return false;
            } else {
                // If the field is not empty
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let testResult = regexEmail.test(this.form.validate.email.input);
                if(!testResult) {
                    // If testresult is false
                    // Trigger error
                    this.form.validate.email.required = false;
                    this.form.validate.email.error = true;
                    this.form.validate.email.success = false;
                    return false;
                } else {
                    // Test result is true
                    // Trigger success
                    this.form.validate.email.required = false;
                    this.form.validate.email.error = false;
                    this.form.validate.email.success = true;
                    return true;
                }
            }
        },
        validateCheckIn: function() {
            // Test to see if field is empty
            if(this.form.validate.checkIn.input.length === 0) {
                // trigger required
                this.form.validate.checkIn.required = true;
                this.form.validate.checkIn.error = false;
                this.form.validate.checkIn.success = false;
                return false;
            } else {
                this.form.validate.checkIn.required = false;
                this.form.validate.checkIn.error = false;
                this.form.validate.checkIn.success = true;
                return true;
            }
        },
        validateCheckOut: function() {
            // Test to see if field is empty
            if(this.form.validate.checkOut.input.length === 0) {
                // trigger required
                this.form.validate.checkOut.required = true;
                this.form.validate.checkOut.error = false;
                this.form.validate.checkOut.success = false;
                return false;
            } else {
                this.form.validate.checkOut.required = false;
                this.form.validate.checkOut.error = false;
                this.form.validate.checkOut.success = true;
                return true;
            }
        },
        validateForm: function(e) {
            if((!this.form.validate.fullName.success)||(!this.form.validate.email.success)||(!this.form.validate.checkIn.success)||(!this.form.validate.checkOut.success)) {
                this.validateFullName();
                this.validateEmail();
                this.validateCheckIn();
                this.validateCheckOut();
                e.preventDefault();
            }
            return true;
        }
    }
}
</script>
<style lang="scss">
@import "./../scss/variables.scss";
.is-expanded {
    width: 100% !important;
}
.form {
    margin: 5px;
    padding: 2rem 0 3rem 0;
    &__border {
        border: 1px solid $gray;
    }
    &__edges {
        border-radius: 20px;
    }
}
#formColumn {
    display: none;
    height: 0;
    transition-delay: 0.2s;
    transition: 0.2s;
}
.control {
    &-right {
        margin-right: 5px;
        @media screen and (max-width: $br-medium) {
            margin-right: 0;
        }
    }
    &-left {
        margin-left: 5px;
        @media screen and (max-width: $br-medium) {
            margin-left: 0;
        }
    }
}
#enquireColumn {
    display: block;
    opacity: 1;
    transition: 0.2s;
}
.list__padding {
    padding: 1rem;
}
.map {
    width: 100%;
    height: 172px;
}
.background {
    &--white {
        background-color: white;
    }
    &--height {
        height: 90vh;
        @media screen and (max-width: $br-medium) {
            height: auto;
        }
    }
}
.table {
    width: 100% !important;
}
.hotel-image {
    height: 500px;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 5px;
}
</style>