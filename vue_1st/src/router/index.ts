//创建 一个路由器并暴露出去

//导入
import { createRouter, createWebHashHistory } from "vue-router"; //和常规的不一样 需要注意
//导入需要跳转的组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Detail from "@/pages/Detail.vue";
//创建一个路由器
const router = createRouter({
  //创建一个history对象
  history: createWebHashHistory(),
  //配置路由
  routes: [
    {
      name: "shouye",
      path: "/home",
      component: Home,
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xijie",
          path: "detail/:id/:title/:content?",
          component: Detail,
          // 直接用 针对于prarms参数
          props:true
          //函数写法 适合query参数
          // props(route){
          //   return route.query;  
          // }
        },
      ],
    },
  ],
});

//导出路由
export default router;
