<template>
  <form @submit.prevent="addCard">
    <label for="card-number">Card number</label>
    <input
      type="text"
      id="card-number"
      maxlength="16"
      v-model="cardInfo.cardNr"
      placeholder="XXXX-XXXX-XXXX-XXXX"
    />
    <label for="cardholder-name">Cardholder name</label>
    <input
      type="text"
      id="cardholder-name"
      v-model="cardInfo.owner"
      placeholder="Firstname Lastname"
    />

    <div>
      <div>
        <label for="month">Month</label>
        <select id="month" v-model="cardInfo.month">
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label for="year">Year</label>
        <select id="year" v-model="cardInfo.year">
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
        </select>
      </div>
    </div>

    <label for="vendor">Vendor</label>
    <select id="vendor" v-model="cardInfo.vendor" @change="$emit('change-vendor', cardInfo.vendor)">
      <option value="bitcoin-inc">Bitcoin Inc</option>
      <option value="ninja-bank">Ninja Bank</option>
      <option value="blockchain-inc">Blockchain Inc</option>
      <option value="evil-corp">Evil Corp</option>
    </select>

    <button class="my-btn">Add card</button>
  </form>
</template>

<script>
export default {
  name: "CardForm",
  props: {
    cardInfo: Object
  },
  methods: {
    addCard() {
      this.$root.$emit("add-card", this.cardInfo);
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 80%;
  margin: 2rem auto;

  label {
    text-align: left;
    display: block;
    margin: 1rem 0 0.5rem 0;
  }

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-flow: column;

      select {
        width: 190px;
      }
    }
  }

  input,
  select {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .my-btn {
    margin-top: 1rem;
    cursor: pointer;
    outline: none;
  }
}
</style>