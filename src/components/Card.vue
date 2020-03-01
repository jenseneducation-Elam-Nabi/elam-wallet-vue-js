<template>
  <div
    @click="$emit('change-card', cardInfo)"
    class="my-card"
    :style="{'background-color': cardInfo.backgroundColor}"
  >
    <div class="card-icon">
      <img :src="cardInfo.chip" alt="card-info" />
      <img :src="cardInfo.vendor" alt="card-info" />
    </div>

    <h1 class="card-nr" v-if="cardInfo.cardNr">{{ AddSpace }}</h1>

    <!-- <h1 class="card-nr">{{cardInfo.cardNr}}</h1> -->

    <ul class="info">
      <li>
        <p>Cardholder name</p>
        <h3>{{cardInfo.owner}}</h3>
      </li>
      <li>
        <p>Valid thru</p>
        <h3>{{cardInfo.month}}</h3>
        <h3 v-show="cardInfo.month">/</h3>
        <h3>{{cardInfo.year}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardInfo: Object
  },
  computed: {
    AddSpace() {
      let cNumber = this.cardInfo.cardNr;
      let cNumberSpaces = cNumber.match(/.{1,4}/g);
      return cNumberSpaces.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 80%;
  margin: auto;
  height: 250px;
  display: flex;
  color: #fff;
  z-index: 1;
  flex-flow: column;
  padding: 2rem 1rem;
  border-radius: 12px;
  backface-visibility: hidden;
  justify-content: space-between;
  text-shadow: 0 0 5px rgba(#000, 0.2);
  box-shadow: 0 0 20px rgba(#000, 0.4);
  .card-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1.card-nr {
    margin: 1rem 0;
    text-align: left;
    font-size: 2rem;
    letter-spacing: 3px;
  }

  ul.info {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;

    li {
      text-transform: uppercase;

      p {
        font-size: 0.8rem;
      }
      &:nth-child(1) {
        text-align: left;
      }
      &:nth-child(2) {
        text-align: right;

        h3 {
          display: inline;
        }
      }
    }
  }
}
</style>