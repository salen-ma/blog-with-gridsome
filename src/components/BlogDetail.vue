<template>
  <el-card shadow="never" style="min-height: 400px">
    <div slot="header">
      <el-row>
        <el-col :span="12">
          <span>{{ blog.title }}</span>
        </el-col>
        <el-col :span="12">
          <div style="text-align: right;">
            <el-button
              @click="$share()"
              style="padding: 3px 0; margin-right: 10px;"
              type="text"
              icon="el-icon-share"
              >分享</el-button
            >
            <g-link to="/blogs">
              <el-button
                style=" padding: 3px 0"
                type="text"
                icon="el-icon-more-outline"
                >更多博客
              </el-button>
            </g-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
      发布 {{ blog.created_at | date }} <br />
      更新 {{ blog.updated_at | date }}
    </div>
    <div
      style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px"
    >
      <pre style="font-family: '微软雅黑'">{{ blog.description }}</pre>
    </div>
    <div
      v-html="htmlContent"
      class="markdown-body"
      style="padding-top: 20px"
    ></div>
  </el-card>
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  props: {
    blog: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    htmlContent () {
      return md.render(this.blog.content)
    }
  }
}
</script>