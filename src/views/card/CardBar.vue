<template>
  
     <section>
    <!--是否登录-->
    <Category />
  <login-welcome />

    <!--今日赠言-->
    <tip-card />

    <!--资源推介-->
    <PromotionCard />
  </section>
</template>

<script>
import Category from "@/views/card/Category"
import TipCard from '@/views/card/Tip'
import PromotionCard from '@/views/card/Promotion'
import LoginWelcome from '@/views/card/LoginWelcome'
export default {
  name:"CardBar",
  components: {Category,LoginWelcome, PromotionCard, TipCard },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
</style>