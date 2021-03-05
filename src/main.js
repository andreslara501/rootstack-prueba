import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'

import router from './router';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyACnimf28FyDdJq8x6GkK_6JlxT6PO6JWw',
    libraries: 'places'
  },
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
