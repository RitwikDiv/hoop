import { createStore } from 'vuex';

export default createStore({
	state: {
		jwtToken: '',
	},
	getters: {
		jwtToken: (state) => {
			return state.jwtToken;
		},
	},
	mutations: {
		set_jwt(state, jwtValue) {
			localStorage.jwtToken = jwtValue;
			state.jwtToken = localStorage.jwtToken;
		},
		remove_jwt(state) {
			localStorage.clear();
			state.jwtToken = '';
		},
	},
	actions: {},
	modules: {},
});
