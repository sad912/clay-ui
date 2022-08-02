import { App } from 'vue'
import Button from './src/button'
import './style/button.scss'

export { Button }

export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
