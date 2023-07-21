<template>
    <div>
      <h2>学校名称：{{ studentName }}</h2>
      <h2>学校地址：{{ address }}</h2>
      <button @click="showName">点我提示学生名</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Student",
    data() {
      return {
        studentName: "张三",
        address: "四川",
      };
    },
    methods: {
      showName() {
        alert(this.studentName);
      },
    },
  };
  </script>
  
