<template>
  <div id="app">
    <SplashScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
    </main>
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue';
import SplashScreen from "./components/SplashScreen.vue";

export default {
  name: 'App',
  components: {
    GoogleMap,
    SplashScreen
  },
  data() {
    return { 
      isLoading: true, }
  },
  mounted() {
    console.log('Component mounted.'),
    setTimeout(() => {
      this.isLoading = false;
    }, 
    3500);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
