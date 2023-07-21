<template>
  <div class="school">
    <h1 v-text="msg"></h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg:'你好！'
    };
  },
  props:['name','sex','age']
};
</script>

<style>
.school {
  background-color: gray;
}
</style>