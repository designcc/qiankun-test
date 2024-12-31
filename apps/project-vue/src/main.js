import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
let app = null
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(App)
  app.mount('#app')
} else {
  renderWithQiankun({
    mount(props) {
      const {container, onGlobalStateChange} = props
      app = createApp(App, {
        onGlobalStateChange: onGlobalStateChange
      })
      app.mount(container ? container.querySelector('#app') : '#app')
    },
    bootstrap() {
      console.log('bootstrap')
    },
    unmount() {
      app.unmount()
    }
  })
}