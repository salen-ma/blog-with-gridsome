<template>
  <div style="min-height: 600px">
    <el-card shadow="never" style="margin-bottom: 20px">
      <el-input
        placeholder="请输入关键字"
        v-model="searchKey"
        clearable
        style="width: 300px"
      ></el-input>
      <!-- <el-button
        @click="search"
        icon="el-icon-search"
        style="margin-left: 10px"
        circle
        plain
      ></el-button> -->
      <el-button
        @click="$share()"
        icon="el-icon-share"
        type="warning"
        style="margin-left: 10px"
        plain
        circle
      ></el-button>
    </el-card>

    <div v-if="reposList && reposList.length > 0">
      <el-card
        shadow="hover"
        v-for="(item, index) in reposList"
        :key="'pro' + index"
        style="margin-bottom: 20px"
      >
        <div slot="header">
          <el-row>
            <el-col :span="16">
              <span>
                <span>
                  <i class="el-icon-service"></i>&nbsp;&nbsp; {{ item.name }}
                </span>
              </span>
            </el-col>
            <el-col :span="8">
              <div style="text-align: right;">
                <el-button
                  style="padding: 3px 0"
                  type="text"
                  icon="el-icon-back"
                  >
                  <a :href="item.url" target="__blank">前往GitHub</a>
                </el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          最近更新 {{ item.updatedAt | date }}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px"
        >
          {{ item.description }}
        </div>
        <div style="font-size: 1.1rem;color: #303133;padding: 10px 0px 0px 0px">
          <el-row>
            <el-col :span="14" style="padding-top: 5px">
              <el-tooltip
                effect="dark"
                :content="'star ' + item.stargazers.totalCount"
                placement="bottom"
              >
                <i class="el-icon-star-off" style="margin: 0px 5px 0px 0px"></i>
              </el-tooltip>
              {{ item.stargazers.totalCount }}
              <el-tooltip
                effect="dark"
                :content="'watch ' + item.watchers.totalCount"
                placement="bottom"
              >
                <i class="el-icon-view" style="margin: 0px 5px 0px 15px"></i>
              </el-tooltip>
              {{ item.watchers.totalCount }}
              <el-tooltip
                effect="dark"
                :content="'fork ' + item.forkCount"
                placement="bottom"
              >
                <i class="el-icon-bell" style="margin: 0px 5px 0px 15px"></i>
              </el-tooltip>
              {{ item.forkCount }}
            </el-col>
            <el-col :span="10" style="text-align: right;">
              <el-tag size="small" type="danger" 
                style="margin-right: 5px"
                v-if="item.licenseInfo">{{
                item.licenseInfo.name
              }}</el-tag>
              <el-tag size="small" type="success">{{ item.languages.nodes.map(item => item.name).join(' / ') }}</el-tag>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>

    <el-card
      shadow="never"
      style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
      v-if="!reposList || reposList.length == 0"
    >
      <font style="font-size: 30px;color:#dddddd ">
        <b>还没有开源项目 (╯°Д°)╯︵ ┻━┻</b>
      </font>
    </el-card>
  </div>
</template>

<page-query>
query {
  gitapi {
    user (login: "salen-ma") {
      repositories(first: 30, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          name
          createdAt
          updatedAt
          description
          id
          url
          forkCount
          languages (first: 3) {
            nodes {
              name
            }
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
          licenseInfo {
            name
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: '开源项目',
  },
  data () {
    return {
      searchKey: ''
    }
  },
  computed: {
    reposList () {
      let reposList = []
      try {
        reposList = this.$page.gitapi.user.repositories.nodes
      } catch {}
      return reposList.filter(item => item.name.indexOf(this.searchKey) > -1)
    }
  },
  methods: {
    search () {
      console.log('search')
    }
  }
};
</script>
