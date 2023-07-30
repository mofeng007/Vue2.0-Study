<template>
  <div class="app">
    <h1>{{msg}}，学生姓名是：{{studentName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父 -->
    <School :getSchoolName='getSchoolName'></School>
    <hr>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父(第一种写法：使用v-on或@) -->
    <!-- <Student v-on:atqq="getStudentName"></Student> -->
    <!-- <Student @atqq="getStudentName" @demo="m1"></Student> -->
    
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父(第二种写法：使用ref) -->
    <Student ref="student" @click.native="show"></Student>

  </div>
</template>

<script>
//引入组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School
  },
  data() {
    return {
      msg:'你好啊！',
      studentName:''
    };
  },
  methods: {
    getSchoolName(name){
      console.log('App收到了学校name',name);
    },
    getStudentName(name){
      console.log('App收到了学生name',name);
      this.studentName = name;
    },
    m1(){
      console.log('demo事件被触发了');
    },
    show(){
      alert("123")
    }
  },
  mounted() {
    // 绑定自定义事件
    this.$refs.student.$once('atqq',this.getStudentName);
  },
};
</script>

<style scoped>
.app{
  background-color: red;
}
</style>>