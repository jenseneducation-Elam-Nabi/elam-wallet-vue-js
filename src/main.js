import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    cards: [
      {
        id: 1,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-evil.svg"),
        cardNr: "1234567891011123",
        owner: "Kristina Reinaldo",
        month: "02",
        year: "20",
        backgroundColor: "#D92E4C"
      },
      {
        id: 2,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-bitcoin.svg"),
        cardNr: "1234567891011123",
        owner: "Albert Karlsson",
        month: "05",
        year: "22",
        backgroundColor: "#ffb649"
      },
      {
        id: 3,
        chip: require("./assets/chip-light.svg"),
        vendor: require("./assets/vendor-ninja.svg"),
        cardNr: "1234567891011123",
        owner: "Chupa Cabra",
        month: "03",
        year: "21",
        backgroundColor: "#000"
      }
    ]
  }),
  mounted() {
    this.$root.$on('add-card', card => {
      this.cards.push(card)
    })
  },
  render: h => h(App)
}).$mount('#app')
