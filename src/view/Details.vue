<template>
  <div class="details">
    <h1>DETAILS</h1>
    <div class="product">
      <img :src="productInfo.image" class="img-fluid" />
      <h3>{{productInfo.productTitle}}</h3>
    </div>
    <router-link class="nav-link" to="/">BACK</router-link>
  </div>
</template>
<script>
export default {
  name: "details",
  data() {
    return {
      productList: [
        {
          productTitle: "ABCN",
          image: require("../assets/images/product-1.jpeg"),
          productId: 1
        },
        {
          productTitle: "KARMA",
          image: require("../assets/images/product-2.jpeg"),
          productId: 2
        },
        {
          productTitle: "Tino",
          image: require("../assets/images/product-3.jpeg"),
          productId: 3
        },
        {
          productTitle: "EFG",
          image: require("../assets/images/product-4.jpeg"),
          productId: 4
        },
        {
          productTitle: "MLI",
          image: require("../assets/images/product-5.jpeg"),
          productId: 5
        },
        {
          productTitle: "Banans",
          image: require("../assets/images/product-6.jpeg"),
          productId: 6
        }
      ]
    };
  },
  created() {
    this.productInfo = this.productList.find(
      item => item.productId === this.$route.params.Pid
    );
  }
};
</script>

<style scoped>
.details {
  text-align: center;
  margin: 80px auto;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
}

.product img {
  max-width: 400px;
  width: 100%;
  height: 30vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.product h3 {
  margin-top: 16px;
  text-align: center;
}
</style>