<template>
    <main class="main main__gradient main__gradient--blue">
        <div class="container">
            <div class="columns vcentered is-centered">
                <div class="column column__background column__background--white box bg is-one-third">
                    <div class="has-text-centered">
                        <h1 class="title is-4 font-regular">{{ this.$store.state.loginPage.title }}</h1>
                        <h2 class="subtitle is-6">Login for Holidaze staff</h2>
                    </div>
                    <label class="label font-regular field__padding">Username</label>
                    <div class="field">
                        <div class="control has-icons-left">

                            <input
                                class="input"
                                type="text"
                                placeholder="Username"
                                @keyup.enter="validateLogin"
                                v-model="username"> <!-- Username Field -->

                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i> <!-- User icon -->
                            </span>
                        </div>
                        <span v-if="usernameError" class="help is-danger">Required</span> <!-- Username error -->
                    </div><!-- Field end -->
                    <label class="label font-regular field__padding">Password</label>
                    <div class="field has-addons red">
                        <div class="control is-expanded has-icons-left has-addons-right">

                            <input
                                id="passwordField"
                                class="input"
                                type="password"
                                placeholder="Password"
                                @keyup.enter="validateLogin"
                                v-model="password"> <!-- Password Field -->

                            <span class="icon is-small is-left">
                                <i class="fas fa-key"></i> <!-- Key icon -->
                            </span>
                            <span v-if="passwordError" class="help is-danger">Required</span><!-- Password error -->
                            <span v-if="loginError" class="help help__size is-danger">{{ this.$store.state.loginPage.loginError }}</span> <!-- Login error -->
                        </div>
                        <div class="control">
                            <button class="button eye-button__background--gray tooltip is-tooltip-top" v-bind:data-tooltip="tooltip" @click="toggleVisibility"><!-- Tooltip -->
                                <i id="eyebutton" class="fas fa-eye-slash eye-button__icon--gray"></i> <!-- Eye icon -->
                            </button>
                        </div>
                    </div><!-- Field end -->
                    <div class="control field__padding field__margin">
                        <button @click="validateLogin" class="button is-pulled-right">Log in</button>
                    </div>
                </div><!-- Column end -->
            </div><!-- Columns end -->
        </div><!-- Container end -->
    </main>
</template>
<script>
// Set admin username and password in localstorage
(function() {
    localStorage.setItem('username','admin');
    localStorage.setItem('password','admin')
})();

export default {
    name: 'Login',
    data: function () {
        return {
            tooltip: 'Show password',
            username: '',
            password: '',
            usernameError: false,
            passwordError: false,
            loginError: false,
        }
    },
    beforeMount: function() {
        this.$store.commit('updateLoggedIn', false);
    },
    methods: {
        createSessionId: function() {
            // Create a Session ID string
            const sessionID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            // Set the session ID string to sessionID in data
            this.sessionID = sessionID;
        },
        // if(username !== localStorage.getItem('username'))
        checkUsernameLength: function() {
            // Check the length and display error if false
            if(this.username.length === 0) {
                this.usernameError = true;
                return false;
            } else {
                // Set error to false
                this.usernameError = false;
            }
        },
        checkPasswordLength: function() {
            // Check the length and display error if false
            if(this.password.length === 0) {
                this.passwordError = true;
                return false;
            } else {
                // Set error to false
                this.passwordError = false;
            }
        },
        checkUsernameAndPassword: function () {
            if(this.username === localStorage.getItem('username') && (this.password === localStorage.getItem('password'))) {
                // If username AND password matches local storage
                // Remove error
                this.loginError = false;
                // Set sessionID
                const sessionID = '542s854sa1';
                sessionStorage.setItem('sessionID', sessionID);
                // Push to Admin panel
                this.$router.push({ name: 'adminpanel' });
            } else {
                // This if statement to make sure that the error won't display unless it needs to
                // If username or password is wrong
                this.loginError = true;
                return false;
            }
        },
        validateLogin: function() {
            if ((this.username.length === 0)||(this.password.length === 0)) {
                this.checkUsernameLength();
                this.checkPasswordLength();
            } else if ((this.username.length > 0) && (this.password.length > 0)) {
                this.checkUsernameAndPassword();
            }
        },
        toggleVisibility: function () {
            // Toggle password visibility
            const passwordField = document.getElementById("passwordField");
            const eyebutton = document.getElementById("eyebutton");

            if (passwordField.type === "password") {
                // If the password field type is set to password, swap to text to reveal the password.
                passwordField.type = "text";
                // Alter the tooltip
                this.tooltip = 'Hide password'
                // Change the icon from eye to eye slash
                eyebutton.classList.remove("fa-eye-slash");
                eyebutton.classList.add("fa-eye");
            } else {
                // If the password field type is set to text, swap to text to hide the password.
                passwordField.type = "password";
                // Alter the tooltip
                this.tooltip = 'Show password'
                // Change the icon from eye slash to eye.
                eyebutton.classList.remove("fa-eye");
                eyebutton.classList.add("fa-eye-slash");
            }
        }
    }
}
</script>
<style lang="scss">

@import "./../scss/variables.scss";
.main {
    height: 100vh;
    &__gradient {
        background-color: $darker-blue; // fallback colour
        &--blue {
            background-image: linear-gradient(0deg, $darker-blue, $purple, $light-blue);
        }
    }
}
.help {
    &__size {
        font-size: 1rem;
    }
}
.column {
    &__background {
        // Adds spacing to the loginbox
        padding: 30px;
        &--white {
            // adds white background to the login box
            background-color: white;
        }
    }
}
.vcentered {
    // Centers the login box
    padding: 35vh 0 0 0;
}
.eye-button {
    &__background--gray {
        background-color: lighten($gray, 12%);
    }
    &__icon--gray {
        color: darken($gray,50%);
    }
}
.field {
    &__padding {
        // Adds some space between the fields.
        padding: 10px 0 0 0;
    }
    &__margin {
        // Fixes the floating button on tablet and mobile breakpoints.
        margin-bottom: 30px;
    }
}

</style>
