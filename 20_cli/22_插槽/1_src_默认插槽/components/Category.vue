<template>
  <div class="category">
    <h3>{{title}}</h3>

    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title']
    }
</script>

<style>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
img{
    width: 100%;
}
video{
    width: 100%;
}
</style>