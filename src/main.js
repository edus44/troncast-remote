import Vue from 'vue'
import App from './components/App.vue'
import store from './store.js'

import 'bulma/css/bulma.css'

new Vue({
    el: '#app',
    store,
    render: h=>h(App)
})