import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    // cards: [
    //   {
    //     id: 1,
    //     chip: require("./assets/chip-light.svg"),
    //     vendor: require("./assets/vendor-evil.svg"),
    //     cardNr: "1234567891011123",
    //     owner: "Kristina Olofsson",
    //     month: "02",
    //     year: "20",
    //     backgroundColor: "#D92E4C"
    //   },
    //   {
    //     id: 2,
    //     chip: require("./assets/chip-light.svg"),
    //     vendor: require("./assets/vendor-bitcoin.svg"),
    //     cardNr: "1234567891011123",
    //     owner: "Albert Karlsson",
    //     month: "05",
    //     year: "22",
    //     backgroundColor: "#ffb649"
    //   },
    //   {
    //     id: 3,
    //     chip: require("./assets/chip-light.svg"),
    //     vendor: require("./assets/vendor-ninja.svg"),
    //     cardNr: "1234567891011123",
    //     owner: "Chupa Cabra",
    //     month: "03",
    //     year: "21",
    //     backgroundColor: "#000"
    //   }
    // ]
    cards: []
  }),
  mounted() {
    if (localStorage.getItem("card-item")) {
      try {
        this.cards = JSON.parse(localStorage.getItem("card-item"));
      } catch (error) {
        console.log(error);
      }
    }
    this.$root.$on('add-card', card => {
      this.cards.push(card)
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem('card-item', parsed)
    })
    this.$root.$on("delete-card", id => {
      this.cards = JSON.parse(localStorage.getItem("card-item"));
      this.cards = this.cards.filter(card => card.id != id);
      localStorage.setItem("card-item", JSON.stringify(this.cards));
    });
  },
  render: h => h(App)
}).$mount('#app')

