<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <!-- <ul>
        <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
      </ul> -->
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.baidu.com/">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com/">单机开玩</a>
        <a href="https://www.baidu.com/">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <!-- 以下视频仅作为演示使用 -->
      <video
        controls
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com/">悬疑</a>
          <a href="https://www.baidu.com/">惊悚</a>
          <a href="https://www.baidu.com/">恐怖</a>
        </div>
        <h4>欢迎前来观看！</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>