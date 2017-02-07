import Vue from 'vue'
import Vuex from 'vuex'
import socket from './socket'

Vue.use(Vuex)


const state = {
    localPath: '',
    socketConnected: false,
    disposition:{},
    channels: [],
    slots: [],
    channelForms:{}
}

const mutations = {
    SET_LOCAL_PATH(state,value){
        state.localPath = value || ''
    },
    SET_SOCKET_CONNECTED(state,value){
        state.socketConnected = value
    },
    SET_CHANNELS(state,value){
        state.channels = value && value.length ? value : []
    },
    SET_SLOTS(state,value){
        state.slots = value && value.length ? value : []
    },
    SET_DISPOSITION(state,value){
        state.disposition = value
    },
    SET_CHANNEL_FORM(state,{pointer,form}){
        let pointerStr = `${pointer.position}@${pointer.channelId}`
        Vue.set(state.channelForms,pointerStr,form)
    },
    CLEAR_CHANNEL_FORM(state,pointer){
        let pointerStr = `${pointer.position}@${pointer.channelId}`
        Vue.delete(state.channelForms,pointerStr)
    }
}

const actions = {
    removeSlot(store,payload){
        socket.emit('screen:remove-slot',payload)
    },
    selectChannel(store,payload){
        socket.emit('screen:select-channel',payload)
    },
    configureChannel(store,pointer){
        socket.emit('channel:configure',pointer)
    },
    sendFormResult(store,{pointer,result}){
        socket.emit('channel:configure',pointer,result)
    },
    addSlot(){
        socket.emit('screen:add-slot')
    },
    toggleDisposition(store,param){
        socket.emit('screen:toggle-disposition',param)
    },
    requestData(){
        socket.emit('repository:request-list')
        socket.emit('screen:request-slots')
        socket.emit('screen:request-disposition')
        socket.emit('channel:request-configure-form')
    }
}

let store = new Vuex.Store({ state, mutations, actions })

socket.on('repository:list',list=>{
    store.commit('SET_CHANNELS',list)
})
socket.on('screen:slots',list=>{
    store.commit('SET_SLOTS',list)
})
socket.on('screen:disposition',disposition=>{
    store.commit('SET_DISPOSITION',disposition)
})
socket.on('channel:configure-form',(pointer,form)=>{
    if (form)
        store.commit('SET_CHANNEL_FORM',{pointer,form})
    else
        store.commit('CLEAR_CHANNEL_FORM',pointer)
})
socket.on('connect',()=>{
    store.commit('SET_SOCKET_CONNECTED',true)
    store.dispatch('requestData')
})
socket.on('disconnect',()=>{
    store.commit('SET_SOCKET_CONNECTED',false)
})


export default store