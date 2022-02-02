<template>
  <div class="columns mt-6">
    <div class="column mt-6">
      <div class="mt-6">
        <p class="content">UH OH! 页面丢失</p>
        <p class="content subtitle mt-6">
          您所寻找的页面不存在, {{times}} 秒后，将返回首页！
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"404",
  components: {},
  props: {},
  data() {
    return {
      times:10
    };
  },
  watch: {},
  computed: {},
  methods: {
    goHome:function(){
      this.timer=setInterval(()=>{
        this.times--
        if(this.times ===0 ){
          clearInterval(this.timer)
          this.$router.push({path:'/'})
        }
      },1000)
    }
  },
  created() {
    this.goHome();
  },
  mounted() {}
};
</script>
<style  scoped>
.wrapper{}
</style>