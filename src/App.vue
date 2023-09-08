<template>
  <main class="container mx-auto pt-14">
    <data-table />
  </main>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import DataTable from "./components/DataTable.vue";

export default {
  name: "App",

  components: {
    DataTable,
  },

  data: () => ({
    //
  }),

  mounted() {
    this.$store.dispatch("fetchAndStoreUsers");
  },
};
</script>

<style>
#app {
  @apply bg-scelloo-backgrounds-parent w-screen leading-4;
  min-height: 100vh;
}
</style>
