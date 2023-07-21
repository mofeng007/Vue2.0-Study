<template>
  <div>
    <Student name="邱邱" sex="男" :age="18"></Student>
    <Student name="友友" sex="女" :age="99"></Student>
  </div>
</template>

<script>
    //引入组件 
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
            Student
        },
        data() {
            return {
               
            }
        },
    }
</script>

<style>

</style>