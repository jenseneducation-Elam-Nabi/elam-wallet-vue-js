<template>
  <div class="card-container">
    <Top headline="Add new bank card" smallHeadline="New card" />
    <Card :cardInfo="cardInfo" />
    <CardForm @change-vendor="changeVendor" :cardInfo="cardInfo" />
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  name: "AddCard",
  components: { Top, Card, CardForm },
  data: () => ({
    cardInfo: {
      id: Date.now(),
      chip: require("@/assets/chip-dark.svg"),
      vendor: require("@/assets/vendor-evil.svg"),
      cardNr: "",
      owner: "",
      month: "",
      year: "",
      backgroundColor: "#999"
    }
  }),
  methods: {
    changeVendor(vendor) {
      if (vendor === "ninja-bank") {
        this.cardInfo.backgroundColor = "#000";
        this.cardInfo.vendor = require("@/assets/vendor-evil.svg");
      }
      if (vendor === "bitcoin-inc") {
        this.cardInfo.backgroundColor = "#ffb649";
        this.cardInfo.vendor = require("@/assets/vendor-bitcoin.svg");
      }
      if (vendor === "blockchain-inc") {
        this.cardInfo.backgroundColor = "#7C4FDF";
        this.cardInfo.vendor = require("@/assets/vendor-blockchain.svg");
      }
      if (vendor === "evil-corp") {
        this.cardInfo.backgroundColor = "#D92E4C";
        this.cardInfo.vendor = require("@/assets/vendor-evil.svg");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>