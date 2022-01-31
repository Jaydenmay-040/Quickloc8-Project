<template>
  <div id="app">
    <SplashScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
    </main>
    <GoogleMap />
    <Messages/>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue';
import Messages from "./components/Messages.vue";
import SplashScreen from "./components/SplashScreen.vue";

export default {
  name: 'App',
  components: {
    GoogleMap,
    SplashScreen,
    Messages
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* overflow: hidden; */
}
body {
  background: rgb(255,87,34);
  background: linear-gradient(333deg, rgba(255,87,34,1) 35%, rgba(246,130,94,1) 100%);
  overflow-y: hidden;
  /* primary: '#FF5722',
  secondary: '#FFCCBC',
  accent: '#2e302f',
  error: '#fe2a39' */
}
</style>
