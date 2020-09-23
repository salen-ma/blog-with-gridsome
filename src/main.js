// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Plugins from './common/plugins'
import Filters from './common/filters'

export default function (Vue, { router, head, isClient }) {
  Vue.use(ElementUI)
  Vue.use(Plugins)
  Vue.use(Filters)
}
