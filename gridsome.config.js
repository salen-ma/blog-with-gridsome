// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://mashaoliang.cn:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['posts'],
        typeName: 'Strapi',
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
      }
    }
  ],
  templates: {
    StrapiPosts: [
      {
        path: '/blog/:id',
        component: './src/templates/Blog.vue'
      }
    ]
  }
}
