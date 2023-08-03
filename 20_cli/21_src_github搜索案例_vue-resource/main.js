// 引入vue
import Vue from "vue";
// 引入app
import App from "./App.vue"
// 引入插件
import vueResource from 'vue-resource'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // 安装全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})