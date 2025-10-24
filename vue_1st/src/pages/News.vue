<template>
  <div class="news">
    <!-- 导航区 -->
    <div class="list">
      <ul>
        <li v-for="value in news" :key="value.id">
          <router-link to="/news/detail">{{ value.title }}</router-link>
        </li>
      </ul>
    </div>
    <!-- 展示区 -->
    <div class="show">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";
const news = ref([
  { id: 1, title: "新闻1" },
  { id: 2, title: "新闻2" },
  { id: 3, title: "新闻3" },
]);
</script>

<style scoped>
.news {
  display: flex;
  max-width: 600px;
  margin: 60px auto;
  padding: 30px 20px;
  background: #f9fafc;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-family: "Segoe UI", Arial, sans-serif;
  gap: 20px; /* ✅ 导航和内容之间留间距 */
}
.list {
  width: 200px;
}
.show {
  flex: 1; /* ✅ 自动占据剩余空间 */
  background-color: rgb(245, 234, 236);
  border-radius: 8px;
  min-height: 200px; /* ✅ 给它一个高度 */
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
/* 列表 */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 每一条新闻 */
li {
  background: white;
  margin-bottom: 12px;
  padding: 14px 18px;
  border-radius: 8px;
  /* transition: all 0.3s ease; */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); */
}

/* 悬停效果 */
li:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #e8f0fe;
  color: #1a73e8;
  cursor: pointer;
}
</style>
