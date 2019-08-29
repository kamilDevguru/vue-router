<template>
  <div class="home">
    <h1>HOME</h1>
    <Products :products="productList" />
  </div>
</template>
<script>
import Products from "@/components/Products";

export default {
  components: { Products },
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
  }
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 80px auto;
}

.home h1 {
  text-align: center;
}
</style>