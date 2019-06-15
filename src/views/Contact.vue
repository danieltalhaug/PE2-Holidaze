<template>
  <main class="min-height">
    <div class="container min-height">
    <NotificationSuccess  v-bind:notificationText="notificationText" 
                          v-bind:showNotification="showNotification"
                          v-on:closeNotification="closeNotification"/>
      <div class="section"><!-- Notification success end -->
        <div class="columns is-centered">
          <div class="column is-half form__border form__background form__background--white">
            <div class="is-text-centered">
              <h1 class="title is-2 has-text-centered section-title">{{ this.$store.state.contactPage.title }}</h1>
              <h2 class="subtitle is-4 section-title">{{ this.$store.state.contactPage.subtitle }}</h2>
            </div>
            <form method="POST" @submit="validateForm" action="http://localhost/holidaze/src/server/contact-success.php" novalidate="true">

              <div class="field form-padding">
                <label for="clientName" class="label">Full name</label>
                <div class="control has-icons-right">

                  <input
                  class="input"
                  v-bind:class="{ 'is-danger': fullNameRequiredError, 'is-danger': fullNameLengthError, 'is-success': fullNameSuccess }"
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Name"
                  v-model="fullName"
                  @keyup="validateFullname"
                  ><!-- Full name input  -->
                  <span class="icon is-small is-right" v-if="fullNameSuccess">
                    <i class="fas fa-check has-text-success"></i>
                  </span>

                  <span class="help" v-if="fullNameLengthError">Please enter your full name.</span>
                  <span class="help is-danger" v-if="fullNameRequiredError">This field is required</span>
                </div>
              </div><!-- Full Name Field -->

              <div class="field form-padding">
                <label for="email" class="label">Email Address</label>
                <div class="control has-icons-right">

                  <input
                    class="input"
                    v-bind:class="{ 'is-danger': emailRequiredError, 'is-danger': emailValidError, 'is-success': emailSuccess }"
                    type="text"
                    name="email"
                    id="email"
                    inputmode="email"
                    placeholder="Email"
                    v-model="email"
                    @keyup="validateEmail"
                    ><!-- Email input  -->
                    <span class="icon is-small is-right" v-if="emailSuccess">
                    <i class="fas fa-check has-text-success"></i>
                    </span>

                </div>
                <span class="help" v-if="emailValidError">Please enter a valid Email address.</span>
                <span class="help is-danger" v-if="emailRequiredError">This field is required</span>
              </div><!-- Email Address Field -->

              <div class="field form-padding">
                <label for="message" class="label">Message</label>
                <div class="control has-icons-right">

                  <textarea 
                    class="textarea"
                    v-bind:class="{ 'is-danger': messageRequiredError, 'is-danger': messageLengthError, 'is-success': messageSuccess }"
                    placeholder="Your Message"
                    name="message"
                    id="message"
                    rows="8"
                    cols="80"
                    v-model="message"
                    @keyup="validateMessage"
                    ><!-- Message input  -->
                  </textarea>
                  <span class="help is-pulled-right" v-if="message.length">{{this.message.length}} characters.</span>
                  <span class="help" v-if="messageLengthError">Please enter your message. Minimum 10 characters.</span>
                  <span class="help is-danger" v-if="messageRequiredError">This field is required</span>
                </div>
              </div><!-- Message Field -->

              <div class="field form-padding">
                <div class="control">
                  <button
                  class="button button--yellow is-pulled-right"
                  v-bind:class="{ 'is-static': formSent }"
                  type="submit"
                  >{{ buttonText }}</button>
                </div>
              </div><!-- Button Field -->

            </form><!-- Form end -->
          </div><!-- Column end -->
        </div><!-- Columns end -->
      </div><!-- Section end -->
    </div><!-- Container end -->
  </main>
</template>
<script>
import NotificationSuccess from './../components/NotificationSuccess'
export default {
  name: 'Contact',
  components: {
    NotificationSuccess
  },
  data: function () {
    return {
      fullName: "",
      email: "",
      message: "",
      fullNameSuccess: false,
      fullNameRequiredError: false,
      fullNameLengthError: false,
      emailSuccess: false,
      emailRequiredError: false,
      emailValidError: false,
      messageSuccess: false,
      messageRequiredError: false,
      messageLengthError: false,
      buttonText: 'Submit',
      showNotification: false,
      notificationText: 'Message sent! Thank you for contacting Holidaze. We will get back to you as soon as possible.',
      formSent: false
    }
  },
  methods: {
    validateFullname: function () {
      // Test to see if Full name field is empty, then test the name with regex
      if(this.fullName.length === 0) {
        // See if full name field is empty
        this.fullNameSuccess = false;
        this.fullNameRequiredError = true;
        this.fullNameLengthError = false;
        return false;
      } else {
        const fullNameRegex = /^(\w.+\s).+$/;
        let testResult = fullNameRegex.test(this.fullName);
        if(!testResult) {
          // If the testResult is false
          this.fullNameSuccess = false;
          this.fullNameRequiredError = false;
          this.fullNameLengthError = true;
          return false;
        } else {
          this.fullNameSuccess = true;
          this.fullNameRequiredError = false;
          this.fullNameLengthError = false;
          return true;
        }
      }
    },
    validateEmail: function () {
      // Test to see if Email field is empty, then test the email with regex
      if(this.email.length === 0) {
        // See if Email field is empty
        this.emailSuccess = false;
        this.emailRequiredError = true;
        this.emailValidError = false;
        return false;
      } else {
        // If email field is not empty check the input with regex
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let testResult = regexEmail.test(this.email);
        if(!testResult) {
          // If the test result is false
          this.emailSuccess = false;
          this.emailRequiredError = false;
          this.emailValidError = true;
          return false;
        } else {
          // If the test result is true 
          this.emailSuccess = true;
          this.emailRequiredError = false;
          this.emailValidError = false;
          return true;
        }
      }
    },
    validateMessage: function () {
      // Validate Message. Check if it's empty, check if it's less than 9 characters.
      if(this.message.length === 0) {
        // If message length is zero
        this.messageSuccess = false;
        this.messageRequiredError = true;
        this.messageLengthError = false;
        return false;
      } else if (this.message.length <= 9) {
        // If message length is the same as or less than 9
        this.messageSuccess = false;
        this.messageRequiredError = false;
        this.messageLengthError = true;
        return false;
      } else {
        // If length 0 and less than 9 is false
        this.messageSuccess = true;
        this.messageRequiredError = false;
        this.messageLengthError = false;
        return true;
      }
    },
    closeNotification: function () {
      this.showNotification = false;
    },
    validateForm: function(e) {
      if((!this.fullNameSuccess)||(!this.emailSuccess)||(!this.messageSuccess)) {
        this.validateFullname();
        this.validateEmail();
        this.validateMessage();
        e.preventDefault();
      }
      return true;
    } // ValidateForm end
  } // Methods end
}
</script>

<style lang="scss">
@import "./../scss/variables.scss";
.form-padding {
  padding: 20px 0 0 0; // gives some more vertical spacing between the elements
}
.form {
  &__border {
    border: 1px solid $gray;
    border-radius: 20px;
  }
  &__background {
    padding: 40px;
    &--white {
    background-color: white;
    }
  }
}
.is-static {
  color: white !important;
}
</style>

