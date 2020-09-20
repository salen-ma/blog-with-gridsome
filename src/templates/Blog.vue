<template>
  <div style="min-height: 600px">
    <BlogDetail :blog="$page.blog"/>
  </div>
</template>

<page-query>
query ($id: ID!) {
  blog: strapiPosts (id: $id) {
    id
    title
    description
    content
    updated_at
    created_at
  }
}
</page-query>

<script>
import BlogDetail from '../components/BlogDetail'

export default {
  metaInfo: {
    title: '博客详情',
  },
  components: {
    BlogDetail
  }
};
</script>  