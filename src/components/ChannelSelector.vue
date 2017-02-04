<template>
    <div class="channel-selector">
        <div v-for="channel in channels" class="media">
            <div class="media-left">
                <button class="button" @click="select(channel)">Select</button>
            </div>
            <div class="media-content">
                <div class="title">
                    {{ channel.name }}
                </div>
                <div class="subtitle">
                    {{ channel.description }}
                </div>
                <div class="subtitle is-12">
                    {{ channel.version }}
                </div>
            </div>
        </div>
        <button class="button" @click="select(null)">Empty</button>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    props:['position'],
    computed:mapState(['channels']),
    methods:{
        select(channel){
            this.$store.dispatch('selectChannel',{
                channelId: channel && channel.id,
                position: this.position
            })
        }
    }
}
</script>

<style lang="less">

.channel-selector{
    max-height: 400px;
    overflow: auto;
}

</style>