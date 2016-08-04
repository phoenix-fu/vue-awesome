import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import exampleRouter from 'routers/example'

import './assets/css/transition.css'

// install router
Vue.use(Router)

let router = new Router()

router.map({
  '/': exampleRouter
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
