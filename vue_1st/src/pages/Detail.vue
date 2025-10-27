 <template>
  <div class="news-detail">
    <ul>
      <li>编号：{{ id }}</li>
      <li>标题：{{ title }}</li>
      <li>内容：{{ content }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
//用props优化
defineProps(['id','title','content'])
</script>

<style scoped>
.news-detail {
  width: 80%;
  margin: 30px auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  font-family: "Segoe UI", Arial, sans-serif;
}

.news-detail ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.news-detail li {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.news-detail li:last-child {
  border-bottom: none;
}

.news-detail li:first-child {
  font-weight: bold;
  color: #6c63ff;
}
</style>
