// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router"

import About from "../pages/About"

import Home from "../pages/Home"

import News from "../pages/News"

import Message from "../pages/Message"

import Detail from "../pages/Detail"



// 创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name: 'news',
                    path: 'news',
                    component: News,
                    meta:{isAuth:true,title:'新闻'},
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'信息'},
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            props: true,
                            meta:{isAuth:true,title:'详情'},
                        }
                    ]
                },
            ]
        },
    ]
})

// 全局前置路由守卫---初始化时被调用，每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log("前置路由守卫",to,from);
    // 判断是否需要鉴权
    if(to.meta.isAuth){
        if(localStorage.getItem('school')==='beida1'){
            next()
        }else{
            alert("学校名不对，无权限查看")
        }
    }else{
        next()
    }
})

// 全局后置路由守卫---初始化时被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title || '学习';
    console.log("后置路由守卫",to,from);
})

export default router