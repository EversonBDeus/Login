import { createRouter, createWebHistory} from 'vue-router'

import App from '../views/App'
import RegisterUser from '../views/RegisterUser.vue'
import MyTeste from '../views/MyTeste'



const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/register',
    name: 'register',
    component:RegisterUser 
  },

  {
    path: '/teste',
    name: 'myTeste',
    component:MyTeste 
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
