<template>
  <div class="wrapper">
    <el-upload ref="upload"
               class="avatar-uploader"
               :action="action"
               :headers="headers"
               multiple="false"
               :auto-upload="false"
               :show-file-list="false">
      <i slot="default"
         class="el-icon-plus"></i>
      <div slot="file"
           slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail"
             :src="file.url"
             alt="">
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)">
            <i class="el-icon-download"></i>
          </span>
          <span v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-button class="primary"
               @click="submitUpload()">保存</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  props: {},

  data() {
    return {
      action: `${
        process.env.NODE_ENV === 'development'
          ? process.env.VUE_APP_SERVER_URL
          : process.env.VUE_APP_PROD_URL
      }/post/upload`,

      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    }
  },
  watch: {},
  computed: {
    ...mapGetters(['token']),
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    headers() {
      return { Authorization: 'Bearer ' + this.token }
    },
  },
  created() {},
  mounted() {},
}
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>