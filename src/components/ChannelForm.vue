<template>
    <div class="channel-form">

        <!-- title -->
        <h1>{{ form.title }}</h1>

        <!-- elements -->
        <div class="level" v-for="element in form.elements">

            <!-- input -->
            <div class="level-item" v-if="element.type=='input'">
                <label>{{ element.label }}</label>
                <input v-model="result[element.name]">
            </div>

            <!-- button -->
            <div class="level-item" v-if="element.type=='button'">
                <button class="button" @click="submit(element.name)">{{ element.label }}</button>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    props:['form'],
    data(){
        return{
            result:{}
        }
    },
    created(){
        this.$watch('form',()=>this.buildModel(),{immediate:true})
    },
    methods:{
        submit(buttonName){
            this.result[buttonName] = true
            let result = JSON.parse(JSON.stringify(this.result))
            this.$emit('submit',result)
        },
        buildModel(){
            this.$set(this,'result',{})
            this.form.elements.forEach(element=>{
                let initial = element.type=='button' ? false : ''
                this.$set(this.result,element.name,initial)
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