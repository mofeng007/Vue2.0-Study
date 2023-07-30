<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      msg: "你好！",
      name:'邱邱',
      sex:'男',
      age:18
    };
  },
  methods: {
    sendStudentName() {
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',666)
  },
  }
}
</script>

<style>
.student {
  background-color: orange;
  padding: 5px;
  margin: 10px;
}
</style>