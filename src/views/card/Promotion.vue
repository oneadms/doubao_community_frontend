<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥂 推广</span>
    </div>
    <div>
        <p v-for="(item,index) in list" :key="index" class="block">
             ❤️ <a :href="item.link" target="_blank" >{{item.title}}</a>
        </p>
    </div>
  </el-card>
</template>

<script>
import {getList} from "@/api/promotion"
export default {
  name:"Promotion",
  components: {},
  props: {},
  data() {
    return {
      list:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    fetchList(){
      getList().then((response)=>{
        const {data} =response
        this.list=data
      } )
    }
  },
  created() {
    this.fetchList()
  },
  mounted() {}
};
</script>
<style  scoped>

</style>