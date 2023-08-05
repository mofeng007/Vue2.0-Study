// 引入vue
import Vue from "vue";
// 引入app
import App from "./App.vue"

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';


// 按需引入
// 引入ElementUI组件库
import { Button, Row, DatePicker } from 'element-ui';


// 关闭vue的生产提示
Vue.config.productionTip = false

// 应用ElementUI
// Vue.use(ElementUI);

Vue.component(Button.name, Button);
Vue.component('qq-row', Row);
Vue.component(DatePicker.name, DatePicker);

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})