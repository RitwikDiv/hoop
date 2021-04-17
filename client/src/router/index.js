import { createRouter, createWebHashHistory } from 'vue-router'
import Memories from '../views/Memories.vue'
import Notes from '../views/Notes.vue'

const routes = [
  {
    path: '/',
    name: 'Memories',
    component: Memories
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
