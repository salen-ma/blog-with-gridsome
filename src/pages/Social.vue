<template>
  <div>
    <el-card
      shadow="never"
      style="min-height: 400px;margin-bottom: 20px;padding: 0px 0px 20px 0px"
    >
      <el-tabs v-model="activeTab" type="card">
        <el-tab-pane
          :label="'粉丝 ' + followers.totalCount"
          name="followers"
          style="padding: 5px"
        >
          <div>
            <div v-if="followers.nodes.length">
              <el-row style="min-height: 200px; ">
                <el-col
                  :span="8"
                  v-for="(item, index) in followers.nodes"
                  :key="'followers' + index"
                  style="padding: 10px"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px;color: #606266;line-height: 20px"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <span style=" text-decoration:none;cursor:pointer">{{ item.login }}</span>
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.url"
                      target="_blank"
                      style=" text-decoration:none;cursor:pointer"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.avatarUrl"
                      style="width: 100%;border-radius:5px;margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div
              style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
              v-else
            >
              <font style="font-size: 30px;color:#dddddd ">
                <b>(￢_￢) 没有一个粉丝</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          :label="'关注 ' + following.totalCount"
          name="following"
          style="padding: 5px"
        >
          <div>
            <div v-if="following.nodes.length">
              <el-row style="min-height: 200px; ">
                <el-col
                  :span="8"
                  v-for="(item, index) in following.nodes"
                  :key="'following' + index"
                  style="padding: 10px"
                >
                  <el-card
                    shadow="hover"
                    style="font-size: 13px;color: #606266;line-height: 20px"
                  >
                    <i class="el-icon-star-off"></i>&emsp;
                    <a
                      @click="$router.push(`/user/social/details/${item.login}`)"
                      style=" text-decoration:none;cursor:pointer"
                      >{{ item.login }}</a
                    >
                    <br />
                    <i class="el-icon-message"></i>&emsp;
                    <a
                      :href="item.url"
                      target="_blank"
                      style=" text-decoration:none;cursor:pointer"
                      >TA的主页</a
                    >
                    <br />
                    <img
                      :src="item.avatarUrl"
                      style="width: 100%;border-radius:5px;margin-top: 5px"
                    />
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div
              style="min-height: 300px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
              v-else
            >
              <font style="font-size: 30px;color:#dddddd ">
                <b>(￢_￢) 还没有关注一个人</b>
              </font>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<page-query>
query {
  gitapi {
    user (login: "salen-ma") {
      followers (first: 50) {
        totalCount
        nodes {
          id
          name
          createdAt
          updatedAt
          bio
          avatarUrl
          url
          login
        }
      }
      following (first: 50) {
        totalCount
        nodes {
          id
          name
          createdAt
          updatedAt
          bio
          avatarUrl
          url
          login
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: '社交圈',
  },
  data () {
    return {
      activeTab: "followers",
    }
  },
  computed: {
    followers () {
      let followers = {};
      try {
        followers = this.$page.gitapi.user.followers;
      } catch {}
      return followers;
    },
    following () {
      let following = {};
      try {
        following = this.$page.gitapi.user.following;
      } catch {}
      return following;
    },
  },
};
</script>
