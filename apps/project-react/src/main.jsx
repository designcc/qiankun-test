// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
let app = null

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
} else {
  renderWithQiankun({
    mount(props) {
      console.log(props);

      render(props)
    },
    bootstrap() {
      console.log('bootstrap')
    },
    unmount() {
      app.unmount()
    }
  })
}
function render(props = {}) {
  const { container, onGlobalStateChange } = props
  const dom = container ? container.querySelector('#root') : document.querySelector('#root')
  app = createRoot(dom)
  app.render(<App onGlobalStateChange={onGlobalStateChange}/>)
}