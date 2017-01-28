import Vue from 'vue'
import App from './components/App.vue'

new Vue({
    el: '#app',
    render: h=>h(App)
})


import socketIo from 'socket.io-client'

const io = socketIo('http://127.0.0.1:13370')