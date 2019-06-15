<template>
    <footer class="footer">
        <div class="has-text-centered">
            <nav v-if="!this.$store.state.loggedIn" class="footer-nav">
                <router-link class="footer-nav__links has-text-white" to="/">Home</router-link>
                <router-link class="footer-nav__links has-text-white" to="/contact">Contact</router-link>
                <router-link class="footer-nav__links has-text-white" to="/login">Log in</router-link>
            </nav><!-- footer nav end -->
            <nav v-else class="footer-nav">
                <router-link class="footer-nav__links has-text-white" to="/">Home</router-link>
                <router-link class="footer-nav__links has-text-white" to="/contact">Contact</router-link>
                <router-link class="footer-nav__links has-text-white" to="/adminpanel">Admin panel</router-link>
                <router-link class="footer-nav__links has-text-white" to="/login">Log out</router-link>
            </nav><!-- footer nav end -->
            <p class="copyright-text--spacing copyright-text__background--dark has-text-white">
                &#169; Copyright Daniel Talhaug
            </p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss">
@import "./../scss/variables.scss";
.footer {
    // Removes padding from bulma footer
    padding: 0 0 0 0 !important;
}
.footer-nav {
    // adds some padding to the top of the footer
    padding-top: 50px;
    // Distances the footer nav from copyright text
    margin: 0 0 50px 0;
    &__links {
        // Adds space between the footer links
        padding: 0 1.5rem 0 1.5rem;
    }
}
.copyright-text {
    &__background--dark {
        background-color: darken($footer-blue, 2%);
    }
    &--spacing {
        // adds some padding to the copyright section
        padding: 1rem 0 1rem 0;
    }
}
</style>
