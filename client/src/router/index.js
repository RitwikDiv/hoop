import { createRouter, createWebHashHistory } from 'vue-router';
import Memories from '../views/Memories.vue';
import Notes from '../views/Notes.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/memories',
		name: 'Memories',
		component: Memories,
	},
	{
		path: '/notes',
		name: 'Notes',
		component: Notes,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
