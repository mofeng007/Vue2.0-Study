<template>
  <div class="school">
    <h1 v-text="msg"></h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <h2>学校人数：{{x}}</h2>
    <button @click="showName">点击展示学校姓名</button>
  </div>
</template>

<script>
// 引入一个混合
import {hunhe,hunhe2} from '../mixin'
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
  mixins:[hunhe,hunhe2]
};
</script>

<style>
.school {
  background-color: gray;
}
</style>