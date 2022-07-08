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
  }
}
