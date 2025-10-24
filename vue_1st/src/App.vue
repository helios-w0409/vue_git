<script lang="ts" setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="app">
    <!-- 欢迎标语 -->
    <h1 class="title">欢迎页面</h1>
    <!-- 导航 -->
    <div class="navigate">
      <router-link to="/home" active-class="active">首页</router-link>
      <!-- 这个active-class="active" 需要自己定义 写在css里面 -->
      <router-link :to="{ name: 'xinwen' }" active-class="active">
        新闻
      </router-link>
      <router-link :to="{ path: '/about' }" active-class="active"
        >关于</router-link
      >
      <!-- 展示 -->
      <div class="content">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: #6c63ff;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(108, 99, 255, 0.3);
}

/* 整体布局 */
.app {
  display: flex;
  /* 灵活布局  默认是横向 */
  flex-direction: column;
  /* 控制display纵向排列 */
  /* align-items: center;  控制所有内容居中*/
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  color: #333;
  padding: 40px 20px;
}

/* 欢迎标题 */
.title {
  font-size: 36px;
  font-weight: 700;
  color: #444;
  margin-bottom: 40px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
}

/* 导航栏 */
.navigate {
  /* display: flex; */
  gap: 30px;
  margin-bottom: 60px;
}

.navigate a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #555;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* 内容展示区 */
.content {
  width: 80%;
  min-height: 200px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* display: flex; */
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #666;
  padding: 20px;
}
</style>
