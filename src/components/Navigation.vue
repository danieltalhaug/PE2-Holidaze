<template>
  <nav class="navbar navbar__border navbar__border--light" role="navigation" aria-label="main navigation">
    <div class="container">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <Logo/>
      </router-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMobile" @click="toggleNav">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a><!-- Navbar burger end -->
    </div><!-- Navbar brand end -->

    <div id="navbarMobile" class="navbar-menu">
      <div v-if="!this.$store.state.loggedIn" class="navbar-end">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
        <div div class="navbar-item">
          <router-link class="button" to="/login">Log in</router-link><!-- Login button -->
        </div><!-- Navbar item end -->
      </div><!-- Navbar end end -->
      <div v-else class="navbar-end">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/contact">Contact</router-link>
        <router-link class="navbar-item" to="/adminpanel">Admin panel</router-link>
        <div div class="navbar-item">
          <router-link class="button" to="/login">Log out</router-link><!-- LogOut button -->
        </div><!-- Navbar item end -->
      </div><!-- Navbar end end -->
    </div><!-- Navbar Menu end -->
  </div><!-- Container end -->
</nav>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: 'Navigation',
  components: {
    Logo
  },
  methods: {
    toggleNav: function() {
      // Get the ID
      const hamburger = document.getElementById("navbarMobile");
      // Toggle the class on or off
      hamburger.classList.toggle("is-active");
    }
  },
  beforeMount: function() {
    this.$store.state.loggedIn;
  }
}
</script>

<style lang="scss">
@import "./../scss/variables.scss";

a.router-link-exact-active {
  color: $primary;
}
.navbar {
  &__border {
    border-bottom: 1px solid;
    &--light {
      border-color: $gray;
    }
  }
}
</style>
