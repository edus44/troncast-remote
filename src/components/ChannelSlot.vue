<template>
    <div class="card">

        <ChannelSelector v-if="choosing" :position="position"></ChannelSelector>
        
        <template v-else>
            <div class="card-content" v-if="channel">
                <div class="media">
                    <div class="media-left">
                        #{{position}}
                    </div>
                    <div class="media-content">
                        <p class="title is-4">
                            {{ channel.name }}
                        </p>
                        <p class="subtitle is-6">
                            {{ channel.description }}
                        </p>
                    </div>
                </div>

            </div>
            <div v-else>
                empty
            </div>
        </template>

        <footer class="card-footer">
            <a class="card-footer-item" @click="remove">Remove</a>
            <a class="card-footer-item" @click="choosing=!choosing">Choose</a>
        </footer>
    </div>
</template>

<script>

import ChannelSelector from './ChannelSelector.vue'

export default {
    props:['channel','position'],
    components:{ChannelSelector},
    data(){
        return {
            choosing:false
        }
    },
    watch:{
        channel(){
            this.choosing=false
        }
    },
    methods:{
        remove(){
            this.$store.dispatch('removeSlot',{
                channelId: this.channel ? this.channel.id : null,
                position:this.position
            })
        }
    }
}
</script>

<style lang="less">

.card{
    margin:10px;
}

</style>