import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router/dist/vue-router'

import { store } from './core/store'
import routes from './core/routes'

import layerBackground from './components/layer-background/vm'
import layerView from './components/layer-view/vm'
import layerHud from './components/layer-hud/vm'
import layerForeground from './components/layer-foreground/vm'

const router = new VueRouter({ routes })
Vue.use(VueRouter)

window.App = new Vue({
    router,
    store,
    components: { layerBackground, layerView, layerHud, layerForeground }
}).$mount("#root")