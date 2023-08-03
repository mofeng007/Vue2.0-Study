<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大十倍为：{{ bigSum }}</h1>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
// 引入mapper
import { mapState, mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),

    ...mapGetters(["bigSum"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },


    //借助mapMutations生成对应的方法，方法中会调用commit去联系Mutations(对象写法)
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    //数组写法
    // ...mapMutations(["JIA","JIAN"]),
   
    
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(对象写法)
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    //数组写法
    // ...mapActions(["jiaOdd","jiaWait"]),
   
  },
};
</script>

<style>
</style>