import { createApp } from 'vue'
import App from './App.vue'
import "./assets/iconfont/iconfont";
import IconPlugin from '../dist/iconfont-vue3.es';
import '../dist/style.css'

createApp(App).use(IconPlugin).mount('#app')
