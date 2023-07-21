<template>
  <div class="school">
    <h1 v-text="msg"></h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="change">尝试修改传过来的数据</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "你好！",
      myAge:this.age
    };
  },
  //简单声明接收
  // props:['name','sex','age']

  //接收的同时对数据进行类型转换
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

  //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //name类型是字符串
      required: true, //name是必要的
    },
    age: {
      type: Number, //age类型是数字
      // required:true, //age是必要的
      default: 999,
    },
    sex: {
      type: String,
      required: true,
    },
  },
  methods: {
    change() {
      this.myAge ++;
    },
  },
};
</script>

<style>
.school {
  background-color: gray;
}
</style>