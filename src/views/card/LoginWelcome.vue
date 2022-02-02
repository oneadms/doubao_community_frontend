<template>
  <el-card class="box-card" shadow="nerver">
      <div slot="header">

        <span>💐 发帖</span>
      </div>
      <div class="has-text-centered"  v-if="token != null && token !== ''">
        <b-button type="is-danger" tag="router-link" :to="{path:'/post/create'}" outlined>
  ✍ 发表想法
        </b-button>
      </div> 
      <div v-else  class="has-text-centered">
   <b-button type="is-primary" tag="router-link" :to="{path:'/register'}" outlined>
      马上入驻
        </b-button>
           <b-button type="is-danger" tag="router-link" :to="{path:'/login'}" outlined>
      社区登入
        </b-button>
      </div>
     
  </el-card>
</template>

<script>
import {mapGetters } from 'vuex'
export default {
  name:"LoginWelcome",
  computed: {

     ...mapGetters([
      'token'
    ])
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
 
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>

</style>