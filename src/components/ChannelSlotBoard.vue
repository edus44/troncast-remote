<template>
    <section class="channel-slot-board">
        <ChannelSlot
            v-for="channel,index in channelList" 
            :channel="channel"
            :position="index+1"
        ></ChannelSlot>

        <div v-if="!channelList.length">No slots</div>
        
        <div class="button" @click="addSlot">
            Add 
        </div>
    </section>
</template>

<script>

import ChannelSlot from './ChannelSlot.vue'

export default {
    methods:{
        addSlot(){
            this.$store.dispatch('addSlot')
        }
    },
    computed:{
        channelList(){
            let {state} = this.$store
            return state.slots.map(channelId=>{
                return state.channels.find(channel=>{
                    return channel.id == channelId
                })
            })
        }
    },
    components: {ChannelSlot}
}
</script>

<style lang="less">


</style>