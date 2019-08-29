<template>
  <div class="contact">
    <h1>Contact</h1>
    <form class="needs-validation" novalidate>
      <div class="mb-3">
        <input type="email" class="form-control" id="email" placeholder="you@example.com" />
        <div class="invalid-feedback">Please enter a valid email address.</div>
      </div>

      <div class="mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" id="title" placeholder="Title" required />
          <div class="invalid-feedback" style="width: 100%;">Title</div>
        </div>
      </div>

      <div class="mb-3">
        <div class="form-group">
          <textarea class="form-control" id="body" rows="8"></textarea>
        </div>
      </div>
      <hr class="mb-4" />
      <button class="btn btn-primary btn-lg btn-block" type="submit">SEND</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "contact"
};
</script>

<style scoped>
.contact {
  text-align: center;
  max-width: 1200px;
  margin: 80px auto;
}
</style>