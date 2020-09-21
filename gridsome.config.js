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
    },
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://api.github.com/graphql',
        fieldName: 'gitapi',
        typeName: 'GitApi',
        headers: {
          Authorization: 'my authou'
        }
      }
    }
  ],
  templates: {
    StrapiPosts: [
      {
        path: '/blog/detail/:id',
        component: './src/templates/Blog.vue'
      }
    ]
  }
}
