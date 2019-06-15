import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    hotelSearch: '',
    hotels: [],
    enquiries: [],
    userMessages: [],
    logoText: "Holidaze",
    heroText: {
      h1: "Find Hotels in Bergen",
      h2: "Search for Hotels in Bergen"
    },
    visitBergen: {
      title: "Things to do in Bergen",
      locations1: [
        {
          title: "Visit Fløyen",
          content: "Take one of Norway's most famous attractions, Fløybanen to the top of Fløyen. Try one of many hiking paths or enjoy a beer in the resturant.",
          image: "https://previews.dropbox.com/p/thumb/AAdZAppk9RuChWBapvZ1kYzKpLeHcoL-btaVPnL2m9z9ALYwkKOz-Wd6Z9pLlnmea9gZwlsJKu5clcvtQYHFGS2drbEGCBLSYVSOjNTwOju3HWDyEukg-UIBTaSdjYrtGGHv0G7_ItCyJ6nmfTreA9dj6nSBQp8jQfEss6WjA8lIvok8RkCDjpcxC9LyYD6wNrezDoUZJzTZ-XdNJNzQyu_iJovORXJXatAM2eH8tWId4cpLOsvyJI72QJLAAOZTYiBbgyrLtWKeax3P5KP6fBdlD26heemC86Xpagf1P_DHeugzYtVA1HG0kBxH-hHiO6FM0lQsn1gey4neqbzIxRk4/p.jpeg?fv_content=true&size_mode=5",
          imageAlt: "Fløyen Directions sign"
        },
        {
          title: "Visit the Aquarium",
          content: "Visit the Aquarium to see the strangest creatures from the entire globe. Watch a movie or attend a lecture. If you're lucky you get to see the penguin babies.",
          image: "https://previews.dropbox.com/p/thumb/AAcsRP_y2U_mweVPBQssQtLKM-du20dlM5rjBAzYvDiLgCenu2twWoZm2q9iO_OHxAKwzB_0rDyLiH2kJKZSSsDfsq1H9QfvsLBY8ine6K5yAe8BLkkh70WpH5zcsmg79rqiQdX6XmmHz0uuMWkK9fB-_wpYdI_Tqt8qegqmzK85zjwcjo6HDOTtdbnJv7sNs-jpIij5IPHlB1K0lU65wmxOa29SwCyfIHGQP70QTAcsiK-8z6EEfEJVDjUsByf9tDiTtChTh6tl0hVuvV3lrgOYUSOpnBsRyssveiiVCFJBub-GNVPawV5f2L1m646m4JimxfvYvyVAlLI7mpAcmQD0/p.jpeg?fv_content=true&size_mode=5",
          imageAlt: "Woman looking at fish at a huge aquarium"
        },
        {
          title: "Visit A Viking museum",
          content: "Relive the history of Bergen by visiting a Viking museum. Look at old buildings and artefacts found in the ground. Buy local made Mjød in the giftshop.",
          image: "https://previews.dropbox.com/p/thumb/AAeB28IAxQqC57KXVobVdSpRwtlPhfi0bX4qPV2_IVAyNwoxvTLVil1tuuYE1gr-hO6oJ5xx2HO5oI1IuAxwb9HFeAKw7b3WmIsBs7biLUHnRkG7u6gCcEDeM67KChByknoT2m0lZkGnHhHqL3cjcwDrwL35WWkarpQC57py_yfHvZqNfpzt-UuHIf0MUU8oWoTX9WPRpZv3W0PLe7BuGaid079_KZLLgc59wPgEyVaC28jXq6OF9y3KhwGHDQpRuCajwaKTp48AITyMKHYs_3ncXxqazolwJkZSZBStHYpFiOIMVnunFrSUzL2ma0L4-bDW8T87AKKr5RKnpNsJakU8/p.jpeg?fv_content=true&size_mode=5",
          imageAlt: "A display of middle age armour and weaponry"
        }
      ],
      locations2: [
        {
          title: "Visit local brewery",
          content: "Take a tour in the Bergens only brewery and try out the local beer. Try everything from lagers to craft beer and challenge the breweries dart champion.",
          image: "https://previews.dropbox.com/p/thumb/AAfC6Yh8pJ59No6dzcLdqnQwv6HovV1x4dKWtaa2CeAP5BuzWVbFMk0YFk2j2Mr_3JDke7nPlacbjqOggWN8nQvyXK8sDfnwoo_QCJXibAoh2GDWKXQtMVuvOif2Nt4tFlj3OtF9JGc6-C9rU-B65DDc5HtDB5xPtcFXSTwjIGCy0CigBHS8meA4t5JBFEqKpdUG3obEqamNL9j8-tjB6d1WYDu2deQVNr3cblAVShuN1ddPtA2xpLB0rQkdJtPY-Ere3e9G1dAdP4irth95YtDX6RnnQ0dEBQXTCh0Sk2EB27IJJjHPPgEaIu4PjGiOIEAFZTWZMDEYLJhJgQQVmVaV/p.jpeg?fv_content=true&size_mode=5",
          imageAlt: "Local brewery image"
        },
        {
          title: "Get rained on",
          content: "By now most Bergensians have gills so grab an umbrella and take a walk in the rain. If you want to feel like a local put on a Southwester and skip the umbrella.",
          image: "https://previews.dropbox.com/p/thumb/AAdK9f_9hGVp131dyYrc3AnpURiExZiKApb2-yex6dxOjzBj9irX58735Npk_DBQwt48nqAkUgaXJ7gI-culQteumyk-O6-smiKEDxbTKE_RSJVbLkoL0YNc_s60P7Tfd0BHa_N0CMmyfz6udUJv14yzTI-t28_ruPGFEyZ-e3UsHQrk4p-Pz6aFshK62fXvD1Lvvg2HKvQUg0Y3jh91foHJvhsSHY3ALx07r__0iLWFQi07UHwb8f2VEx1Ij21SYUFBEYnDamyLkxdYg1dz9sgzmFsBFJvFW2pMhz8l2_wqfhsW5obTrAm4RawtC2KzaX6sPBAYlMIBPWGY2117FiwH/p.jpeg?fv_content=true&size_mode=5",
          imageAlt: "People with umbrellas getting rained on."
        },
        {
          title: "Visit Bryggen food court",
          content: "Get scammed and pay thousands of Kroner just to get your food served on paper plates and your local beer in plastic cups.",
          image: "https://previews.dropbox.com/p/thumb/AAewPiS6Qr75VjdCOo52Xnbzyo7EqDLlY0dphoMIJj1V6Gd0Vqu8QeQuoJoOzx4C610bOTy7lVdynu8jSxVgxHQN5jPF0ZF2L8385lwPQ0FXiQUL55IKWkBruqoeE6Dz9HVRfrqWRuJaF9RkemZRxDXKD-jPrjyJ6Hwe4gH-Kl4EiZEwDznx2XggKgwwZmKDj0iTLevygVQAlKE3nDMP-rEUHYgzgT1yvvoY4bGQRFFGbeyRHvfoBY0EVaLwH9aiXAj1bDQv_Ib03uBZ6Xj0iVpTcDAyeUZWlxEOcBcvp27joHXYwhHgf4bntRY3mSzGmz9x2K2F-kVxgekGcYhS_Hy9/p.jpeg?fv_content=true&size_mode=5",
          imageAlt: "Crabs displayed at Bryggen food court"
        }
      ],
    },
    contactPage: {
      title: "Contact the Holidaze Team",
      subtitle: "Got a compliment or a complaint? Send us a message and we'll get back to you as soon as possible."
    },
    loginPage: {
      title: 'Log in to Holidaze',
      loginError: 'Your account or password is incorrect. Please try again.'
    }
  },
  mutations: {
    getHotels(state) {
      // Fetching JSON data from establishments.json in the server folder
      const hotelData = require('@/server/establishments.json');
      // Sending the Hotel data to the Hotels array
      state.hotels = hotelData;
    },
    getEnquiries(state) {
      // Fetching JSON data from enquiries.json in the server folder
      const enquiriesData = require('@/server/enquiries.json');
      // Sending the enquiries data to the enquiries array
      state.enquiries = enquiriesData;
    },
    getUserMessages(state) {
      // Fetching JSON data from contact.json in the server folder
      const userMessagesData = require('@/server/contact.json');
      // Sending the user messages data to the userMessages array
      state.userMessages = userMessagesData;
    },
    updateSearchWord(state, payload) {
      // Gets the search word from the searchbar component and saves it in state.hotelSearch
      state.hotelSearch = payload;
    },
    updateLoggedIn(state, payload) {
      // Gets the search word from the searchbar component and saves it in state.hotelSearch
      state.loggedIn = payload;
    }
  },
  actions: {
    getHotels: context => {
      context.commit('getHotels');
    },
    getEnquiries: context => {
      context.commit('getEnquiries');
    },
    getUserMessages: context => {
      context.commit('getUserMessages');
    }
  }
})
