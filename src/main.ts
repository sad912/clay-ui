import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
// main.ts
import Button from './button'

createApp(App).use(Button).mount('#app')
