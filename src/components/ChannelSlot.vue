<template>
    <div class="card">

        <ChannelForm 
            v-if="channel && form" 
            :form="form"
            @submit="sendFormResult"
        ></ChannelForm>
        <ChannelSelector 
            v-if="choosing"
            @select="selectChannel"
        ></ChannelSelector>
        
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
            <a v-if="channel" class="card-footer-item" @click="configure">Configure</a>
        </footer>
    </div>
</template>

<script>

import ChannelSelector from './ChannelSelector.vue'
import ChannelForm from './ChannelForm.vue'

export default {
    props:['channel','position'],
    components:{ChannelSelector,ChannelForm},
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
    computed:{
        form(){
            if (!this.channel)
                return null
            let pointerStr = `${this.position}@${this.channel.id}`
            return this.$store.state.channelForms[pointerStr]
        }
    },
    methods:{
        remove(){
            this.$store.dispatch('removeSlot',{
                channelId: this.channel ? this.channel.id : null,
                position:this.position
            })
        },
        configure(){
            this.$store.dispatch('configureChannel',{
                channelId: this.channel.id,
                position:this.position
            })
        },
        selectChannel(channel){
            this.$store.dispatch('selectChannel',{
                channelId: channel && channel.id,
                position: this.position
            })
        },
        sendFormResult(result){
            this.$store.dispatch('sendFormResult',{
                pointer : {
                    channelId: this.channel.id,
                    position: this.position
                },
                result
            })
        },
    }
}
</script>

<style lang="less">

.card{
    margin:10px;
}

</style>