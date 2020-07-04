import Vue from 'vue'
import App from './App.vue'
import router from './router'

import  {defineCustomElements, applyPolyfills} from 'component-library-stenciljs/loader/index.cjs'

Vue.config.productionTip = false


applyPolyfills().then(() => {
  defineCustomElements();
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
