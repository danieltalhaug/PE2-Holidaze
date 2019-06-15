<template>
    <div class="container">
        <form method="POST" @submit="validateField" action="http://localhost/holidaze/src/server/add-establishments-success.php">
            <div class="columns box">
                <div class="column is-one-third">
                    <div class="field">
                        <label for="establishmentName" class="label">{{ establishmentName.label }}</label>
                        <div class="control has-icons-right">
                            <input  v-on:keyup="validateEstablishmentName"
                                    v-model="establishmentName.input"
                                    class="input"
                                    type="text"
                                    name="establishmentName"
                                    id="establishmentName"
                                    placeholder="Establishment Name"><!-- Establishment Name Input" -->
                            <span v-if="establishmentName.required" class="help has-text-danger">{{ establishmentName.requiredText }}</span> <!-- Required -->
                            <span v-if="establishmentName.help" class="help">{{ establishmentName.helpText }}</span> <!-- Help -->
                            <span v-if="establishmentName.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="establishmentName.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i><!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                    <div class="field">
                        <label for="establishmentEmail" class="label">{{ establishmentEmail.label }}</label>
                        <div class="control has-icons-right">
                            <input  v-on:keyup="validateEstablishmentEmail"
                                    v-model="establishmentEmail.input"
                                    class="input"
                                    type="text"
                                    name="establishmentEmail"
                                    id="establishmentEmail"
                                    inputmode="email"
                                    placeholder="Establishment Email"> <!-- Establishment Enamil Input -->
                            <span v-if="establishmentEmail.required" class="help has-text-danger">{{ establishmentEmail.requiredText }}</span> <!-- Required -->
                            <span v-if="establishmentEmail.help" class="help">{{ establishmentEmail.helpText }}</span> <!-- Help -->
                            <span v-if="establishmentEmail.success" class="icon is-small is-right"> 
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="establishmentEmail.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                    <div class="field">
                        <label for="imageUrl" class="label">{{ imgUrl.label }}</label>
                        <div class="control has-icons-right">
                            <input  v-on:keyup="validateUrl"
                                    v-model="imgUrl.input"
                                    class="input"
                                    type="text"
                                    name="imageUrl"
                                    id="imageUrl"
                                    inputmode="url"
                                    placeholder="Image URL"> <!-- Image URL Input -->
                            <span v-if="imgUrl.required" class="help has-text-danger">{{ imgUrl.requiredText }}</span> <!-- Required -->
                            <span v-if="imgUrl.help" class="help">{{ imgUrl.helpText }}</span> <!-- Help -->
                            <span v-if="imgUrl.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="imgUrl.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                    <div class="field">
                        <label for="price" class="label">{{ cost.label }}</label>
                        <div class="control has-icons-right">
                            <input  v-on:keyup="validateCost"
                                    v-model="cost.input"
                                    class="input"
                                    type="number"
                                    name="price"
                                    id="price"
                                    inputmode="numeric"
                                    placeholder="Price per person per night"> <!-- Price per night Input -->
                            <span v-if="cost.required" class="help has-text-danger">{{ cost.requiredText }}</span> <!-- Required -->
                            <span v-if="cost.help" class="help">{{ cost.helpText }}</span> <!-- Help -->
                            <span v-if="cost.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="cost.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                </div><!-- Column end -->
                <div class="column is-one-third">
                    <div class="field">
                        <label for="googleLat" class="label">{{ latitude.label }}</label>
                        <div class="control has-icons-right">
                            <input  v-on:keyup="validateLatitude"
                                    v-model="latitude.input"
                                    class="input"
                                    type="text"
                                    name="googleLat"
                                    id="googleLat"
                                    inputmode="numeric"
                                    placeholder="Google Coordinates Latitude"> <!-- Google Coordinates Latitude Input -->
                            <span v-if="latitude.required" class="help has-text-danger">{{ latitude.requiredText }}</span> <!-- Required -->
                            <span v-if="latitude.help" class="help">{{ latitude.helpText }}</span> <!-- Help -->
                            <span v-if="latitude.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="latitude.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                    <div class="field">
                        <label for="googleLong" class="label">{{ longitude.label }}</label>
                        <div class="control has-icons-right">
                            <input  v-on:keyup="validateLongitude"
                                    v-model="longitude.input"
                                    class="input"
                                    type="text"
                                    name="googleLong"
                                    id="googleLong"
                                    inputmode="numeric"
                                    placeholder="Google Coordinates Longitude"> <!-- Google Coordinates Longitude Input -->
                            <span v-if="longitude.required" class="help has-text-danger">{{ longitude.requiredText }}</span> <!-- Required -->
                            <span v-if="longitude.help" class="help">{{ longitude.helpText }}</span> <!-- Help -->
                            <span v-if="longitude.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="longitude.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                    <div class="field">
                        <label for="id" class="label">{{ id.label }}</label>
                        <div class="control has-icons-right">
                            <input  class="input"
                                    type="number"
                                    name="id"
                                    id="id"
                                    :value="idLength"
                                    inputmode="numeric"
                                    placeholder="ID"
                                    readonly> <!-- ID Input -->
                            <span v-if="id.required" class="help has-text-danger">{{ id.requiredText }}</span> <!-- Required -->
                            <span v-if="id.help" class="help">{{ id.helpText }}</span> <!-- Help -->
                            <span v-if="id.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="id.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                    <div class="field">
                        <label for="maxGuests" class="label">{{ maxGuests.label }}</label>
                        <div class="control has-icons-right">
                            <input  v-on:keyup="validateMaxGuests"
                                    v-model="maxGuests.input"
                                    class="input"
                                    type="number"
                                    name="maxGuests"
                                    id="maxGuests"
                                    inputmode="numeric"
                                    placeholder="Max guests"> <!-- Max guests Input -->
                            <span v-if="maxGuests.required" class="help has-text-danger">{{ maxGuests.requiredText }}</span> <!-- Required -->
                            <span v-if="maxGuests.help" class="help">{{ maxGuests.helpText }}</span> <!-- Help -->
                            <span v-if="maxGuests.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="maxGuests.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                </div><!-- Column end -->
                <div class="column is-one-third">
                    <div class="field">
                        <label for="description" class="label">{{ description.label }}</label>
                        <div class="control has-icons-right">
                            <textarea   v-on:keyup="validateDescription"
                                        v-model="description.input"
                                        class="textarea height-fix"
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder="Description"></textarea> <!-- Text area Input -->
                            <span v-if="description.required" class="help has-text-danger">{{ description.requiredText }}</span> <!-- Required -->
                            <span v-if="description.help" class="help">{{ description.helpText }}</span> <!-- Help -->
                            <span v-if="description.success" class="icon is-small is-right">
                                <i class="fas fa-check has-text-success"></i> <!-- Check Icon -->
                            </span>
                            <span v-if="description.error" class="icon is-small is-right">
                                <i class="fas fa-times has-text-danger"></i> <!-- X icon -->
                            </span>
                        </div>
                    </div><!-- Field end -->
                </div><!-- Column end -->
            </div><!-- Columns end -->
            <div class="columns column--gray box">
                <div class="column is-offset-9">
                    <div class="control">
                        <label for="selfCatering" class="label">Self Catering</label>
                        <div class="control">
                            <label for="true" class="radio">
                                <input  type="radio"
                                        id="true"
                                        name="selfCatering"
                                        value="true">
                                 Yes
                            </label>
                            <label for="false" class="radio">
                                <input  type="radio"
                                        id="false"
                                        name="selfCatering"
                                        value="false">
                                 No
                            </label>
                        </div>
                        <span v-if="radio.required" class="help has-text-danger">Required</span> <!-- Required -->
                    </div>
                </div><!-- Column end -->
                <div class="column">
                    <button type="submit" class="button button--blue is-medium is-pulled-right pulled-right-fix">Submit</button>
                </div><!-- Column end -->
            </div><!-- Columns end -->
        </form><!-- Form end -->
    </div><!-- Container end -->
</template>
<script>
export default {
    name: 'CreateEstablishments',
    data: function() {
        return {
            hotels: this.$store.state.hotels,
            idLength: null,
            testing: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Test Label',
                requiredText: 'test Required',
                helpText: 'test text.'
            },
            establishmentName: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Establishment Name',
                requiredText: 'Required',
                helpText: 'Two names minimum.'
            },
            establishmentEmail: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Establishment Email',
                requiredText: 'Required',
                helpText: 'For example: admin@holidaze.com'
            },
            imgUrl: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Image URL',
                requiredText: 'Required',
                helpText: 'Include http:// or https://'
            },
            cost: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Price per person per night ($)',
                requiredText: 'Required',
                helpText: 'Price per person. Use period for decimal point.'
            },
            latitude: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Google Coordinates Latitude',
                requiredText: 'Required',
                helpText: 'First number needs to be be between -90 to 90. Use period for decimal point. Up to 6 decimals.'
            },
            longitude: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Google Coordinates Longitude',
                requiredText: 'Required',
                helpText: 'First number needs to be be between -180 to 180. Use period for decimal point. Up to 6 decimals.'
            },
            id: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'ID',
                requiredText: 'Required',
                helpText: 'ID is added to the URL, make sure that the ID is not already used. Maximum 5 digits.'
            },
            maxGuests: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Max guests',
                requiredText: 'Required',
                helpText: 'Max number of guests per order. Highest number is 9999'
            },
            description: {
                input: '',
                required: false,
                help: false,
                error: false,
                success: false,
                label: 'Description',
                requiredText: 'Required',
                helpText: 'Character limit is 256.'
            },
            radio: {
                required: false
            }
        }
    },
    methods: {
        forceId: function() {
            // Take in the Hotels length and set it to idLength. We'll use this to
            // in the ID input field.
            this.idLength = this.$store.state.hotels.length + 1;
        },
        validateEstablishmentName: function() {
            if(this.establishmentName.input === "") {
                // If the input is empty, show error
                this.establishmentName.required = true;
                this.establishmentName.help = false;
                this.establishmentName.success = false;
                this.establishmentName.error = true;
                return false;
            } else {
                // If input has a value 
                this.establishmentName.required = false;
                this.establishmentName.help = true;
                this.establishmentName.success = false;
                this.establishmentName.error = true;

                const regexName = /^(\w.+\s).+$/;
                let testResult = regexName.test(this.establishmentName.input);

                if(!testResult) {
                    // If test result is false
                    this.establishmentName.required = false;
                    this.establishmentName.help = true;
                    this.establishmentName.success = false;
                    this.establishmentName.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.establishmentName.required = false;
                    this.establishmentName.help = false;
                    this.establishmentName.success = true;
                    this.establishmentName.error = false;
                    return true;
                }
            }
        },
        validateEstablishmentEmail: function() {
            if(this.establishmentEmail.input === "") {
                // If the input is empty, show error
                this.establishmentEmail.required = true;
                this.establishmentEmail.success = false;
                this.establishmentEmail.error = true;
                return false;
            } else {
                // If input has a value 
                this.establishmentEmail.required = false;
                this.establishmentEmail.success = false;
                this.establishmentEmail.error = true;

                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let testResult = regexEmail.test(this.establishmentEmail.input);

                if(!testResult) {
                    // If test result is false
                    this.establishmentEmail.required = false;
                    this.establishmentEmail.success = false;
                    this.establishmentEmail.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.establishmentEmail.required = false;
                    this.establishmentEmail.success = true;
                    this.establishmentEmail.error = false;
                    return true;
                }
            }
        },
        validateUrl: function() {
            if(this.imgUrl.input === "") {
                // If the input is empty, show error
                this.imgUrl.required = true;
                this.imgUrl.help = false;
                this.imgUrl.success = false;
                this.imgUrl.error = true;
                return false;
            } else {
                // If input has a value 
                this.imgUrl.required = false;
                this.imgUrl.help = true;
                this.imgUrl.success = false;
                this.imgUrl.error = true;

                // eslint throws an herror here because of unnecessary escapes, however removing them breaks the regex
                // eslint-disable-next-line
                const regexUrl = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)+$/;
                let testResult = regexUrl.test(this.imgUrl.input);

                if(!testResult) {
                    // If test result is false
                    this.imgUrl.required = false;
                    this.imgUrl.help = true;
                    this.imgUrl.success = false;
                    this.imgUrl.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.imgUrl.required = false;
                    this.imgUrl.help = false;
                    this.imgUrl.success = true;
                    this.imgUrl.error = false;
                    return true;
                }
            }
        },
        validateCost: function() {
            if(this.cost.input === "") {
                // If the input is empty, show error
                this.cost.required = true;
                this.cost.help = false;
                this.cost.success = false;
                this.cost.error = true;
                return false;
            } else {
                // If input has a value 
                this.cost.required = false;
                this.cost.help = true;
                this.cost.success = false;
                this.cost.error = true;

                const regexCost = /^[0-9]{1,10}[.]{0,1}[0-9]{0,2}$/;
                let testResult = regexCost.test(this.cost.input);

                if(!testResult) {
                    // If test result is false
                    this.cost.required = false;
                    this.cost.help = true;
                    this.cost.success = false;
                    this.cost.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.cost.required = false;
                    this.cost.help = false;
                    this.cost.success = true;
                    this.cost.error = false;
                    return true;
                }
            }
        },
        validateLatitude: function() {
            if(this.latitude.input === "") {
                // If the input is empty, show error
                this.latitude.required = true;
                this.latitude.help = false;
                this.latitude.success = false;
                this.latitude.error = true;
                return false;
            } else {
                // If input has a value 
                this.latitude.required = true;
                this.latitude.help = true;
                this.latitude.success = false;
                this.latitude.error = true;

                const regexLatitude = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
                let testResult = regexLatitude.test(this.latitude.input);

                if(!testResult) {
                    // If test result is false
                    this.latitude.required = false;
                    this.latitude.help = true;
                    this.latitude.success = false;
                    this.latitude.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.latitude.required = false;
                    this.latitude.help = false;
                    this.latitude.success = true;
                    this.latitude.error = false;
                    return true;
                }
            }
        },
        validateLongitude: function() {
            if(this.longitude.input === "") {
                // If the input is empty, show error
                this.longitude.required = true;
                this.longitude.help = false;
                this.longitude.success = false;
                this.longitude.error = true;
                return false;
            } else {
                // If input has a value 
                this.longitude.required = false;
                this.longitude.help = true;
                this.longitude.success = false;
                this.longitude.error = true;

                const regexLongitude = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
                let testResult = regexLongitude.test(this.longitude.input);

                if(!testResult) {
                    // If test result is false
                    this.longitude.required = false;
                    this.longitude.help = true;
                    this.longitude.success = false;
                    this.longitude.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.longitude.required = false;
                    this.longitude.help = false;
                    this.longitude.success = true;
                    this.longitude.error = false;
                    return true;
                }
            }
        },
        validateId: function() {
            if(this.id.input === "") {
                // If the input is empty, show error
                this.id.required = true;
                this.id.help = false;
                this.id.success = false;
                this.id.error = true;
                return false;
            } else {
                // If input has a value 
                this.id.required = false;
                this.id.help = true;
                this.id.success = false;
                this.id.error = true;

                const regexId = /^[\d]{1,5}$/;
                let testResult = regexId.test(this.id.input);

                if(!testResult) {
                    // If test result is false
                    this.id.required = false;
                    this.id.help = true;
                    this.id.success = false;
                    this.id.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.id.required = false;
                    this.id.help = false;
                    this.id.success = true;
                    this.id.error = false;
                    return true;
                }
            }
        },
        validateMaxGuests: function() {
            if(this.maxGuests.input === "") {
                // If the input is empty, show error
                this.maxGuests.required = true;
                this.maxGuests.help = false;
                this.maxGuests.success = false;
                this.maxGuests.error = true;
                return false;
            } else {
                // If input has a value 
                this.maxGuests.required = false;
                this.maxGuests.help = true;
                this.maxGuests.success = false;
                this.maxGuests.error = true;

                const regexMaxGuests = /^[1-9]{1,4}$/;
                let testResult = regexMaxGuests.test(this.maxGuests.input);

                if(!testResult) {
                    // If test result is false
                    this.maxGuests.required = false;
                    this.maxGuests.help = true;
                    this.maxGuests.success = false;
                    this.maxGuests.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.maxGuests.required = false;
                    this.maxGuests.help = false;
                    this.maxGuests.success = true;
                    this.maxGuests.error = false;
                    return true;
                }
            }
        },
        validateDescription: function() {
            if(this.description.input === "") {
                // If the input is empty, show error
                this.description.required = true;
                this.description.help = false;
                this.description.success = false;
                this.description.error = true;
                return false;
            } else {
                // If input has a value 
                this.description.required = false;
                this.description.help = true;
                this.description.success = false;
                this.description.error = true;

                const regexDescription = /^[\w\W]{1,256}$/;
                let testResult = regexDescription.test(this.description.input);

                if(!testResult) {
                    // If test result is false
                    this.description.required = false;
                    this.description.help = true;
                    this.description.success = false;
                    this.description.error = true;
                    return false;
                } else {
                    // If test result is true
                    this.description.required = false;
                    this.description.help = false;
                    this.description.success = true;
                    this.description.error = false;
                    return true;
                }
            }
        },
        validateRadios: function() {
            // Get radio buttons
            const radioTrue = document.getElementById('true').checked;
            const radioFalse = document.getElementById('false').checked;

            if(!radioTrue && !radioFalse) {
                // If no radio button is selected show error
                this.radio.required = true;
            } else {
                // show no, or remove error if radio button is selected
                this.radio.required = false;
            }
        },
        validateField: function(e) {
            if((!this.establishmentName.success)||(!this.establishmentEmail.success)||(!this.imgUrl.success)||(!this.cost.success)||(!this.latitude.success)||(!this.longitude.success)||(!this.maxGuests.success)||(!this.description.success)) {
                this.validateEstablishmentName();
                this.validateEstablishmentEmail();
                this.validateUrl();
                this.validateCost();
                this.validateLatitude();
                this.validateLongitude();
                this.validateMaxGuests();
                this.validateDescription();
                this.validateRadios();
                e.preventDefault();
            }
            return true;
        }
    },
    beforeMount: function() {
        this.forceId();
    }
}
</script>
<style lang="scss">
@import "./../../scss/variables.scss";
.height-fix {
    height: 276px; // fixes the weird height bug with the description column
}
.pulled-right-fix {
    @media screen and (max-width: 768px) {
        float: none !important; // fixes a bug where the submit button is pushed outside the column box on mobile
    }
}
.column--gray {
    background-color: lighten($gray, 12%);
}
.button {
    &--blue {
        background-color: $primary;
        color: white;
    }
}
</style>
