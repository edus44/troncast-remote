<template>
    <section class="app">
        <HeaderBar></HeaderBar>
        <ChannelSlotBoard></ChannelSlotBoard>
    </section>
</template>

<script>
import HeaderBar from './HeaderBar.vue'
import ChannelSlotBoard from './ChannelSlotBoard.vue'

export default {
    name: 'App',
    components:{HeaderBar,ChannelSlotBoard},
    created(){
        this.$store.dispatch('requestData')
    }
}
</script>

<style lang="less">

body,html{
    height: 100%;
}
section.app{
    min-height: 100%;
    overflow: hidden;
    background-color: #3273dc;
}

</style>