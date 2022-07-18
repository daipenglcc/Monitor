import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import * as fundebug from 'fundebug-javascript'
import FundebugVue from 'fundebug-vue'
fundebug.apikey = '7032ad11af3d1cf7b454841998d7a2198ce96ae41ca4f36c31b89ab65afcd0a1'

createApp(App).use(new FundebugVue(fundebug)).mount('#app')
