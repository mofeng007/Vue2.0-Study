## 笔记

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

## 配置项props
     功能：让组件接收外部传过来的数据
        (1).传递数据：
            <Demo name="xxx"/>
        (2).接收数据：
            第一种方式：(只接收)：    
                props:['name']
            第二种方式：(限制类型)：    
                props:{
                    name:Number
                }
            第三种方式：(限制类型，限制必要性，指定默认值)：
                props:{
                    name:{
                         type: String, 
                         required: true, 
                         default: "xxx",
                    }
                }    
     备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。  eg：{myName :this.name}，页面渲染数据也是渲染myName           
             
## mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混入，eg:
            {
                data(){...},
                methods:{...},
                ...
            }
        第二步使用混入，eg：
            (1).全局混入：Vue.mixin(xxx)
            (2).局部混入：mixins:['xxx']

## 插件
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.install = function (Vue,options){
            //1.添加全局过滤器
            Vue.filter(...)

            //2.添加全局指令
            Vue.directive(...)

            //3.全局混入
            Vue.mixin(...)

            //4.添加实例方法
            Vue.prototype.$myMethod = function () {...}
            Vue.prototype.$myProperty = xxx 
        }
    使用插件：
        Vue.use()    

## scoped样式
        作用：让样式在局部生效，防止冲突
        写法：<style scoped>        