<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot :games="games">我是一个插槽</slot>

  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      // 一些数据
      games: ["红色警戒", "王者荣耀", "永劫无间", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>