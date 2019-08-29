<template>
  <div id="app">
    <Header />
    <transition name="moveInUp">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "app",
  components: { Header }
};
</script>

<style scoped>
.moveInUp-enter-active,
.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}

#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
