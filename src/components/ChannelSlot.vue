<template>
    <div class="card">
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
        
        <footer class="card-footer">
            <a class="card-footer-item" @click="remove">Remove</a>
            <template v-if="channel">
                <a class="card-footer-item">Configure</a>
            </template>
            <template v-else>
                <a class="card-footer-item">Choose</a>
            </template>
        </footer>
    </div>
</template>

<script>

export default {
    props:['channel','position'],
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