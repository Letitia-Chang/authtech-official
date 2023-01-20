<template>
  <Header />
  <router-view />
  <Footer />
  <!-- <Widget /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// import Widget from "@/components/Widget.vue";

export default defineComponent({
  name: "App",
  components: { Header, Footer },
});
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
