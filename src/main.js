import Vue from 'vue'
import App from './components/App.vue'

new Vue({
    el: '#app',
    render: h=>h(App)
})


// import io from 'socket.io-client'

// const socket = io('http://127.0.0.1:13370/remote')

// socket.on('connect',()=>{
//     console.log('emited')
//     socket.emit('screen:hello',{hola:true})
// })

// socket.on('screen:hello-back',()=>{
//     console.log('heard you')
// })
// 

import bus from './bus'

bus.emit('screen:hello')

bus.on('screen:hello-back',()=>{
    console.log('heard you')
})

window.so = bus