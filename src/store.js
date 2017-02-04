import Vue from 'vue'
import Vuex from 'vuex'
import socket from './socket'

Vue.use(Vuex)


const state = {
    localPath: '',
    socketStatus: '',
    channels: [],
    slots: [],
}

const mutations = {
    SET_LOCAL_PATH(state,value){
        state.localPath = value || ''
    },
    SET_SOCKET_STATUS(state,value){
        state.socketStatus = value
    },
    SET_CHANNELS(state,value){
        state.channels = value && value.length ? value : []
    },
    SET_SLOTS(state,value){
        state.slots = value && value.length ? value : []
    }
}

const actions = {
    removeSlot(store,payload){
        socket.emit('screen:remove-slot',payload)
    },
    addSlot(){
        socket.emit('screen:add-slot')
    },
    requestData(){
        socket.emit('repository:request-list')
        socket.emit('screen:request-slots')
    }
}

let store = new Vuex.Store({ state, mutations, actions })

socket.on('repository:list',list=>{
    store.commit('SET_CHANNELS',list)
})
socket.on('screen:slots',list=>{
    store.commit('SET_SLOTS',list)
})


export default store