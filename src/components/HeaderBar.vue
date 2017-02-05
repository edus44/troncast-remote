<template>
    <section class="header-bar level">
        <h1 class="level-item">
            Troncast Remote
        </h1>
        <div class="level-item">
            <span v-if="socketConnected" class="tag is-success">Connected</span>
            <span v-else class="tag is-danger">Not connected</span>
        </div>
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
    }
}

</style>