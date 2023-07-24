<template>
  <div class="school">
    <h1 v-text="msg"></h1>
    <h2 class="qq">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学校人数：{{x}}</h2>
    <!-- <button @click="showName">点击展示学校姓名</button> -->
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "你好！",
      name: "复旦",
      address: "上海",
      x:666
    };
  },
};
</script>

<style scoped lang='less'>
.school {
  background-color: gray;

  .qq{
    background-color: red;
  }
}
</style>