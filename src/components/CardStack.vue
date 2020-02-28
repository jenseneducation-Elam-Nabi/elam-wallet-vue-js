<template>
  <div class="card-stack-container">
    <Card
      @change-card="$emit('change-card', card)"
      v-for="card in cards"
      :key="card.id"
      :cardInfo="card"
      class="card-item"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "CardStack",
  components: { Card },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-stack-container {
  display: grid;
  grid-auto-rows: 4rem;
  margin: 4rem 0 14rem;

  .card-item {
    transition: 0.3s;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0),
        0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
  }
}
</style>