/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Login from "/Views/Login.vue";
import HomeView from "Views/HomeView.vue";
import ForgetPwd from "Views/ForgetPwd.vue";
import Register from "Views/Register.vue";
import Success from "Views/Success.vue";
import ResetPwd from "Views/ResetPwd.vue";
import ListOfCourt from "Views/ListOfCourt.vue";
import Profile from "Views/Profile.vue";
import History from "Views/History.vue";
// import ProductDetail from "../Views/ProductDetail.vue";

const routes = [
	{
		path: "/home",
		name: "Home",
		component: HomeView,
		meta: {
			title: "Home Page",
		},
	},
	{
		path: "/ListOfCourt",
		name: "ListOfCourt",
		component: ListOfCourt,
		meta: {
			title: "ListOfCourt",
		},
	},
	{
		path: "/Login",
		name: "Login",
		component: Login,
	},
	{
		path: "/ForgetPwd",
		name: "ForgetPwd",
		component: ForgetPwd,
	},
	{
		path: "/Register",
		name: "Register",
		component: Register,
	},
	{
		path: "/Success",
		name: "Success",
		component: Success,
	},
	{
		path: "/ResetPwd",
		name: "ResetPwd",
		component: ResetPwd,
	},
	{
		path: "/profile",
		name: "Profile",
		component: Profile,
	},
	{
		path: "/history",
		name: "History",
		component: History,
	},
	{
		path: "/",
		redirect: "/home",
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const titleFromParams = to.params?.pageTitle;

	if (titleFromParams) {
		document.title = `${titleFromParams} - ${document.title}`;
	} else {
		document.title = to.meta?.title ?? "SGSW";
	}

	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
	next();
});

export default router;
