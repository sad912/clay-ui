// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Button from '../../../button/src/Button'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('clay-button', Button)
  }
}
