import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key:"AIzaSyCtE6vN9gwno8ESK63vvBBBDBj07iUdauc",
    libaries: 'places', 
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
