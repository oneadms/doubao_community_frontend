<template>
  <!-- buefy里的container类 是一个容器 -->
  <div>
    <div class="mb-5">
      <Header></Header>
    </div>
    <div class="container context">
      <router-view :key="this.$router.fullPath" ></router-view>
    </div>
    <div>
    <Footer></Footer>
    </div>

  </div>

</template>
<script>
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer.vue'
export default {
  name:"APP",
  components: {
    Header,
    Footer
  },
}
</script>
<style scoped>
.container {
  min-height: 500px;
}
</style>
