// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Button from '../../../button/src/button'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
