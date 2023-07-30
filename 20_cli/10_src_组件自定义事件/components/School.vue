<template>
  <div class="school">
    <h1 v-text="msg"></h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学校人数：{{x}}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data() {
    return {
      msg: "你好！",
      name: "复旦",
      address: "上海",
      x:666
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name)
  },
  },
};
</script>

<style scoped lang='less'>
.school {
  background-color: gray;
  padding: 5px;
  margin: 10px;
}
</style>