<template>
  <div class="blog">
    <h1>Blog</h1>
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">React</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">4 years</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>React component</li>
            <li>Redux (thunk, saga)</li>
            <li>Material UI</li>
            <li>React-router-dom</li>
          </ul>
        </div>
      </div>
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Vue</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">2 years</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Vue component</li>
            <li>Vue cli</li>
            <li>Vue Router</li>
            <li>Vuex</li>
          </ul>
        </div>
      </div>
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Angular</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">2 years</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Angular component</li>
            <li>Learning...</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog"
};
</script>

<style scoped>
.blog {
  text-align: center;
  max-width: 1200px;
  margin: 80px auto;
}
</style>