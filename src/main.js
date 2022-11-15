import { createApp } from 'vue'
import App from '../src/views/App'
import router from './router/router'
import store from './store'
import 'animate.css';


createApp(App).use(store).use(router).mount('#app')
