<template>
  <div class="home"></div>
</template>

<script lang="ts" setup name="Home">
// 在此页面3秒后跳转到新闻页面 
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
  onMounted(()=>{
    setTimeout(()=>{
      router.push('/news')
    },3000)

  })
</script>

<style scoped>
.home {
  min-height: 100vh; /* 占满整个视口高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  color: #fff;
  font-family: "Segoe UI", Arial, sans-serif;
  text-align: center;
  padding: 40px 20px;
}
</style>
