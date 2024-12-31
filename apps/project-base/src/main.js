import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import MicroConfig from './config/micro-apps'
import { registerMicroApps, start } from 'qiankun'
import { postIdByUser } from 'service'
import actions from './store'
createApp(App).use(router).mount('#app')

registerMicroApps(MicroConfig, {
  async afterMount() {
    console.log('afterMount')
    const {data} = await postIdByUser({id: 1})
    actions.setGlobalState({
      user: data
    })
  }
})

start()