<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click='showDOM'>点我输出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    //引入组件 
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School
        },
        data() {
            return {
                msg:'你好！'
            }
        },
        methods: {
            showDOM(){
                // 获取真实DOM元素
                console.log('@@',this.$refs.title);
                // 获取School组件的实例对象 vc
                console.log('##',this.$refs.sch)
            }
        },
    }
</script>

<style>

</style>