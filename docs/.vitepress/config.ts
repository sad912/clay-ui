export default {
  themeConfig: {
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/': [
        {
          text: 'Guide',
          collapsible: true,
          items: [{ text: '快速开始', link: '/guide/getting-started/' }],
          link: '/'
        },
        {
          text: '通用',
          collapsible: true,
          items: [{ text: 'Button 按钮', link: '/components/button/' }]
        }
      ]
    }
  },
  markdown: {
    config: md => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  }
}
