//该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 使用vuex
Vue.use(Vuex)

// 准备actions用于响应组件中的动作
const actions = {
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(()=>{
            context.commit('JIA', value)
        },500)
    },
}

// 准备mutations用于操作数据
const mutations = {
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    }

}
// 准备state用于存储数据
const state = {
    sum: 0, //当前的和
    school:'清华',
    subject:'前端'
}


// 创建并暴露store
export default new Vuex.Store({
    state,
    mutations,
    actions,
})