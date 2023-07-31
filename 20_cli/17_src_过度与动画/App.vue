<template>
  <div>
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
    //引入组件 
    import Test from './components/Test.vue'
    import Test2 from './components/Test2.vue'
    import Test3 from './components/Test3.vue'
    export default {
        name:'App',
        components:{
            Test,
            Test2,
            Test3
        },
    }
</script>

<style>

</style>