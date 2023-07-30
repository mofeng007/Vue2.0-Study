<template>
  <div class="school">
    <h1 v-text="msg"></h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      msg: "你好！",
      name: "复旦",
      address: "上海",
      x: 666,
    };
  },
  mounted() {
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是school组件，收到了数据',data)
    // })

    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log("我是school组件，收到了订阅", msgName, data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
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