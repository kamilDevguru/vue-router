<template>
  <div class="row">
    <div class="col-md-4 col-lg4" :key="product.productId" v-for="product in products">
      <Product :data="product" />
    </div>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  components: { Product },
  props: ["products"]
};
</script>