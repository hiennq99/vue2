<template>
  <div id="app">
    <router-view> </router-view>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import loading from "@/components/loading/loading";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.display.isLoading
    })
  }
};
</script>

<style lang="scss">
@import "scss/style.scss";
</style>
