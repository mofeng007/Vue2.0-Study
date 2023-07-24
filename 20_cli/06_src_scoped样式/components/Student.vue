<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="change">尝试修改传过来的数据</button>
    <!-- <button @click="showName">点击展示学生姓名</button> -->
  </div>
</template>

<script>
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
    change() {
      this.age ++;
    },
  },
};
</script>

<style>
.student {
  background-color: orange;
}
</style>