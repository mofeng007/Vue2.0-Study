# 笔记

## 总结：关于不同版本的Vue：
     1.vue.js与vue.runtime.xxx.js的区别：
          (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
          (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器。 
     2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
          需要使用render函数接收到的createElement函数去指定具体内容。
  
## ref属性
    1.被用来给元素或子组件注册引用信息(id的代替者)
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
    3.使用方式：
        打标识：<h1 ref="xxx"></h1> 或 <School ref="xxx"></School>
        获取：this.$refs.xxx