<template>
  <div class="student">
    <h1 v-text="msg"></h1>
    <h2>学生名称：{{ name }}</h2>
    <h2>学校性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生姓名给app</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁当前student组件的实例</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "你好！",
      name:'邱邱',
      sex:'男',
      age:18
    };
  },
  methods: {
    change() {
      this.age ++;
    },
    sendStudentName() {
      // 触发Student组件实例身上的atqq事件
      this.$emit('atqq',this.name)
      // this.$emit('demo')
    },
    // 解绑
    unbind(){
      // 解绑一个自定义事件
      // this.$off('atqq')

      // 解绑多个自定义事件
      // this.$off(['atqq','demo'])

      // 解绑所有自定义事件
      this.$off()
    },
    // 销毁当前student组件的实例
    death(){
      // 销毁后所有的student实例的自定义事件全都不奏效
      this.$destroy()
    }
  },
}
</script>

<style>
.student {
  background-color: orange;
  padding: 5px;
  margin: 10px;
}
</style>