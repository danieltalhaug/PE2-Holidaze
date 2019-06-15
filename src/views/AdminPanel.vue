<template>
    <main class="min-height">
        <div class="tabs is-centered is-boxed">
            <ul>
                <li class="tablinks is-active" @click="controlTabs($event, 'establishments')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-map-marked" aria-hidden="true"></i></span>
                        <span>Create Esablishment</span>
                    </a>
                </li>
                <li class="tablinks" @click="controlTabs($event, 'enquires')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-comment" aria-hidden="true"></i></span>
                        <span>Enquiries</span>
                    </a>
                </li>
                <li class="tablinks" @click="controlTabs($event, 'usermessages')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-envelope" aria-hidden="true"></i></span>
                        <span>User Messages</span>
                    </a>
                </li>
            </ul>
        </div><!-- tabs end -->
        <div class="bg min-height">
            <div class="container">
                <div id="establishments" class="section tabcontent">
                    <CreateEstablishments />
                </div>
                <div id="enquires" class="section tabcontent">
                    <Enquiries />
                </div>
                <div id="usermessages" class="section tabcontent">
                    <UserMessages />
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import CreateEstablishments from '../components/adminpanel/CreateEstablishments.vue';
import Enquiries from '../components/adminpanel/Enquiries.vue';
import UserMessages from '../components/adminpanel/UserMessages.vue';

export default {
    name: 'adminpanel',
    components: {
        CreateEstablishments,
        Enquiries,
        UserMessages
    },
    data: function() {
        return {
            message: "Enquries won't work",
            enquiries: []
        }
    },
    methods: {
        controlTabs: function(event, tabId) {
            // Get elements with class tabcontent and hide them.
            const tabcontent = document.getElementsByClassName('tabcontent');
            for ( let i=0; i < tabcontent.length; i++) {
                tabcontent[i].style.display= "none";
            }
            // Get elements with class tablinks and remove the class is-active
            const tablinks = document.getElementsByClassName('tablinks');
            for ( let i=0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(' is-active', '');
            }
            // show current tab and add is-active to the tab
            document.getElementById(tabId).style.display = 'block';
            event.currentTarget.className += " is-active";
        },
        getEnquries: function() {
            // Run getEnquiries function from the vuex store. 
            this.$store.dispatch('getEnquiries');
        },
        getUserMessages: function() {
            // Run getEnquiries function from the vuex store. 
            this.$store.dispatch('getUserMessages');
        },
        updateLoginState: function() {
            // This sets the LoggedIn state in VUEX to true so that the Navigation can render different options for the admin.
            this.$store.commit('updateLoggedIn', true);
        }
    },
    beforeMount: function() {
        // Check sessionID and send the user to login page if there's 
        // no sessionID
        const app = this;
        if(!sessionStorage.getItem('sessionID')) {
            app.$router.push({ name: 'login' });
        } else {
            // run the functions that dispatches the vuex functions that'll fetch data from the json files.
            // The child components will get the data directly from the store.
            this.getEnquries();
            this.getUserMessages();  
            this.updateLoginState();
        }
        
    }
}
</script>
<style lang="scss">
@import "./../scss/variables.scss";
#establishments {
    // This allows the content in establishments to be shown when the page is loaded
    display: block;
}
.tabcontent {
    // Hides the content that is not active
    display: none;
}
.bg {
    background-color: white;
}
.tabs {
    margin-bottom: 0 !important;
}
.is-active a {
    color: $primary !important;
}
</style>
