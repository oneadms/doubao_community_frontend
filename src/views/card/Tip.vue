<template>
  <el-card class="box-card"
           shadow="never">
    <div slot="header">
      <span>🥳每日一句</span>
    </div>

    <div class="has-text-left block">
      {{tip.content}}
    </div>
    <!--has-text-right 设置文本在右边显示  -->
    <!-- mt == magrinTop -->
    <div class="has-text-right mt-5 block">
      ———{{tip.author}}
    </div>

  </el-card>
</template>

<script>
import { getTodayTip } from '@/api/tip'
export default {
  components: {},
  props: {},
  data() {
    return {
      tip: {},
    }
  },
  watch: {},
  computed: {},
  methods: {
    fetchTodayTip() {
      getTodayTip().then((response) => {
        // 语法糖 相当于 const obj = response.data
        const { data } = response
        this.tip = data
      })
    },
  },
  created() {
    this.fetchTodayTip()
  },
  mounted() {},
}
</script>
<style  scoped>
</style>