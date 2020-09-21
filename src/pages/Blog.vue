<template>
  <div>
    <el-card shadow="never" style="margin-bottom: 20px">
      <el-input
        placeholder="请输入关键字"
        v-model="searchKey"
        clearable
        style="width: 300px"
      ></el-input>
      <el-button
        @click="search"
        icon="el-icon-search"
        style="margin-left: 10px"
        circle
        plain
      ></el-button>
      <el-button
        @click="$share()"
        style="margin-left: 10px"
        icon="el-icon-share"
        type="warning"
        plain
        circle
      ></el-button>
    </el-card>

    <div v-if="$page.posts.edges.length > 0">
      <el-card
				v-for="post in $page.posts.edges"
				:key="post.node.id"
        shadow="hover"
        style="margin-bottom: 20px"
      >
        <div slot="header">
          <el-row>
            <el-col :span="16">
              <span>
                <g-link :to="`/blog/${post.node.id}`"
									style="text-decoration:none;cursor:pointer">
                  {{post.node.title}}
                </g-link>
              </span>
            </el-col>
            <el-col :span="8">
              <div style="text-align: right;">
                <el-button
                  @click="$share(`/blog/${post.node.id}`)"
                  style="padding: 3px 0"
                  type="text"
                  icon="el-icon-share"
                ></el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          最近更新 {{post.node.updated_at}}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px"
        >
          {{post.node.description}}
        </div>
      </el-card>
    </div>
    <Pager :info="$page.posts.pageInfo"/>

		<el-card v-if="$page.posts.edges.length == 0"
			shadow="never" 
			style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center">
			<font style="font-size: 30px;color:#dddddd ">
				<b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
			</font>
		</el-card>
  </div>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPosts (perPage: 5, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        updated_at
        description
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: '博客列表',
  },
  components: {
    Pager
  },
  data() {
    return {
			searchKey: ''
    };
  },
  methods: {
    search() {
      console.log('search');
    },
  },
};
</script>

<style>
  nav a {
    display: inline-block;
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    min-width: 28px;
    border-radius: 2px;
    text-align: center;
    
  }
  nav a:hover {
    text-decoration: none;
  }
  nav .active {
    background-color: #409eff;
    color: #fff;
  }
</style>
