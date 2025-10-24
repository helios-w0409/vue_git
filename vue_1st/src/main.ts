import { createApp } from "vue";
import App from "./App.vue";
//导入路由器
import router from "./router";
//创建一个应用
const app = createApp(App);
//使用路由器
app.use(router);
//挂载整个应用到app容器里
app.mount("#app");
// 创建根组件 mount挂载到 app容器里
