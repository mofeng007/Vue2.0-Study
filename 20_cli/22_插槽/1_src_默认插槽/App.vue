<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <!-- <ul>
        <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
      </ul> -->
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
        <!-- 以下视频仅作为演示使用 -->
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
//引入组件
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      // 一些数据
      foods: ["火锅", "烧烤", "小龙虾", "牛排", "串串烧"],
      games: ["红色警戒", "王者荣耀", "永劫无间", "超级玛丽"],
      films: [
        "《教父》",
        "《你好！》",
        "《拆弹专家》",
        "《阿甘正传》",
        "《泰坦尼克号》",
        "《这个杀手不太冷》",
      ],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>