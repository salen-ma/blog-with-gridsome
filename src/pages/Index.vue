<template>
  <div style="min-height: 600px">
    <BlogDetail :blog="$page.posts.edges[0].node"/>
  </div>
</template>

<page-query>
query {
  posts: allStrapiPosts {
    edges {
      node {
        id
        title
        description
        content
        updated_at
        created_at
      }
    }
  }
}
</page-query>

<script>
import BlogDetail from '../components/BlogDetail'

export default {
  metaInfo: {
    title: '最新动态',
  },
  components: {
    BlogDetail
  }
};
</script>  