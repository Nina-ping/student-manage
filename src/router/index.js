import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "@/views/home/home.vue";
import Login from "@/views/login/login.vue";
import Nofind from "@/views/lose/noFind.vue";
import ForgetPwd from "@/views/forget-pwd/forgetPwd.vue";

Vue.use(VueRouter);

const routes = [{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home",
		component: Home,
		meta: {
			requireLogin: true,
			aaa: 122,
			bbb: 45,
		}
	},
	{
		path: "/login",
		component: Login,
	},
	{
		path: "/forget",
		component: ForgetPwd,
	},
	{
		path: "/nofind",
		component: Nofind,
	}
];

const router = new VueRouter({
	mode: 'hash',
	routes,
});

router.beforeEach((to, from, next) => {
	console.log(to);
	if (to.path === "/home") {
		if (localStorage.getItem('name') === "nina") {
			next();
		} else {
			next("/login");
		}
	} else {
		next();
	}
});

export default router