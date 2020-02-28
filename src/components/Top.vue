<template>
  <div class="top">
    <h1>{{headline}}</h1>
    <p>{{smallHeadline}}</p>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: ["headline", "smallHeadline"]
};
</script>

<style lang="scss" scoped>
.top {
  text-align: center;
}
h1 {
  margin-bottom: 2rem;
}
p {
  margin-bottom: 0.5rem;
}
</style>