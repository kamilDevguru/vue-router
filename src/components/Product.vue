<template>
  <div class="product">
    <img :src="data.image" class="img-fluid" />
    <h3 @click="gotoDetail(data.productId)">{{data.productTitle}}</h3>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["data"],
  methods: {
    gotoDetail(proId) {
      this.$router.push({ name: "details", params: { Pid: proId } });
    }
  }
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
}

.product img {
  max-width: 400px;
  width: 100%;
  height: 24vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.product h3 {
  margin-top: 8px;
  text-align: center;
  cursor: pointer;
}
</style>