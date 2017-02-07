<template>
    <section class="channel-slot-board">
        <ChannelSlot
            v-for="channel,index in channelList" 
            :channel="channel"
            :position="index+1"
        ></ChannelSlot>

        <div v-if="!channelList.length">No slots</div>
        
        <div class="button" @click="addSlot">
            Add Slot
        </div>
        <br><br>
        <p>Channel disposition</p>
        <div class="button" @click="toggleDisposition('horizontal')">
            Horizontal {{ disposition.horizontal}}
        </div>
        <div class="button" @click="toggleDisposition('mosaic')">
            Mosaic {{ disposition.mosaic}}
        </div>
        <div class="button" @click="toggleDisposition('reverse')">
            Reverse {{ disposition.reverse}}
        </div>
    </section>
</template>

<script>

import ChannelSlot from './ChannelSlot.vue'
export default {
    methods:{
        addSlot(){
            this.$store.dispatch('addSlot')
        },
        toggleDisposition(param){
            this.$store.dispatch('toggleDisposition',param)
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
        },
        disposition(){
            return this.$store.state.disposition
        }
    },
    components: {ChannelSlot}
}
</script>

<style lang="less">


</style>