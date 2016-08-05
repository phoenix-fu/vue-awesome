import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import compManager from './compManager'
import loadDirective from 'web/vue-base/vue-directive'
import loadTransition from 'web/vue-base/vue-transition'
import exampleRouter from 'routers/example'

import './assets/css/transition.css'
import './assets/css/skin/base.css'

loadDirective()
loadTransition()

// register global components
compManager.registerGlobal()

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
