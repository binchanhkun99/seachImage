import { createApp } from 'vue'
import './style.css'
import router from './router'
import Antd from 'ant-design-vue';
import axios from 'axios'
import 'ant-design-vue/dist/reset.css';


import App from './App.vue'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.config.globalProperties.axios=axios
app.mount('#app')
