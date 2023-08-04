<template>
  <div>
    <Count></Count>

  </div>
</template>

<script>
//引入组件
import Count from "./components/Count.vue";

export default {
  name: "App",
  components: {
    Count,
  },
};
</script>

<style>
button{
  margin-left: 5px;
}
</style>
