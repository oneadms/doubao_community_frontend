<template>
  
<el-card class="box-card" shadow="nerver">
    <div slot="header">

        <span>😘 热门标签</span>
           </div>
        <div class="columns is-multiline" v-loading="loading">
          <router-link v-for="(item,index) in hotTag" :key="index"  :to="{name:'tag',params:{name:item.name}}">
                  <b-tag rounded  class="column s-narrow" >{{item.name}}</b-tag>
          </router-link>
        </div>
   
</el-card>  
 
</template>

<script>
import {getHotTag} from "@/api/tag"
export default {
  components: {},
  props: {},
  data() {
    return {
      hotTag:[],
      loading:true
      
      
    };
  },
  watch: {},
  computed: {},
  methods: {
    fetchHotTag(){
      getHotTag().then((response)=>{
        const {data}=response
        this.hotTag=data
        
      })
      this.loading=false
    }
  },
  created() {
    this.fetchHotTag()
  },
  mounted() {}
};
</script>
<style scoped>
.wrapper{}
</style>