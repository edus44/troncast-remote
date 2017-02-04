<template>
    <section class="header-bar">
        <h1>
            Troncast
            <span v-if="socketConnected" class="tag is-success">Connected</span>
            <span v-else class="tag is-danger">Not connected</span>
        </h1>
    </section>
</template>

<script>

import {mapState} from 'vuex'

export default {
    computed:mapState(['socketConnected'])
} 
</script>

<style lang="less">

section.header-bar{
    h1{
        padding:10px 0;
        font-size: 32px;
        color: white;
        font-weight: 300;
        text-align: center;
    }
}

</style>