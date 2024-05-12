import { createRouter, createWebHashHistory } from 'vue-router'
// import { createWebHistory } from 'vue-router';
import Style from '@/Views/admin/StyleView.vue'
import Home from '@/Views/customer/HomeView.vue'
import HomeView from '@/Views/admin/DashBoard.vue'
// import Style from '@/Views/StyleView.vue';
// import ProductDetail from "../Views/ProductDetail.vue";

const routes = [
  //for admin
  {
    meta: {
      title: 'Select style'
    },
    path: '/admin',
    name: 'style',
    component: Style
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/admin/dashboard',
    name: 'dashboard',
    component: HomeView
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/admin/tables',
    name: 'tables',
    component: () => import('@/Views/admin/TablesView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/admin/forms',
    name: 'forms',
    component: () => import('@/Views/admin/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/admin/profile',
    name: 'profile',
    component: () => import('@/Views/admin/ProfileView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/admin/ui',
    name: 'ui',
    component: () => import('@/Views/admin/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/admin/responsive',
    name: 'responsive',
    component: () => import('@/Views/admin/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/admin/login',
    name: 'login',
    component: () => import('@/Views/admin/LoginView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/admin/error',
    name: 'error',
    component: () => import('@/Views/admin/ErrorView.vue')
  },
  {
    //for guest and cus
    meta: {
      title: 'Home Page'
    },
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    meta: {
      title: 'ListOfCourt'
    },
    path: '/ListOfCourt',
    name: 'ListOfCourt',
    component: () => import('@/Views/customer/ListOfCourt.vue')
  },
  {
    meta: {
      title: 'CourtDetail'
    },
    path: '/CourtDetail',
    name: 'CourtDetail',
    component: () => import('@/Views/customer/CourtDetail.vue')
  },
  {
    meta: {
      title: 'Login Page'
    },
    path: '/Login',
    name: 'Login',
    component: () => import('@/Views/customer/LoginSite.vue')
  },
  {
    meta: {
      title: 'Forget Password Page'
    },
    path: '/ForgetPwd',
    name: 'ForgetPwd',
    component: () => import('@/Views/customer/ResetPwd.vue')
  },
  {
    meta: {
      title: 'forget'
    },
    path: '/forget',
    name: 'forget',
    component: () => import('@/Views/customer/ForgetPwd.vue')
  },
  {
    meta: {
      title: 'Register Page'
    },
    path: '/Register',
    name: 'Register',
    component: () => import('@/Views/customer/RegisterSite.vue')
  },
  {
    meta: {
      title: 'Reg Sucess'
    },
    path: '/Success',
    name: 'Success',
    component: () => import('@/Views/customer/SuccessSite.vue')
  },
  {
    meta: {
      title: 'Reset Password'
    },
    path: '/ResetPwd',
    name: 'ResetPwd',
    component: () => import('@/Views/customer/ResetPwd.vue')
  },
  {
    meta: {
      title: 'Cus Profile'
    },
    path: '/profile',
    name: 'Profile',
    component: () => import('@/Views/customer/ProfileSite.vue')
  },
  {
    meta: {
      title: 'History Booking'
    },
    path: '/history',
    name: 'History',
    component: () => import('@/Views/customer/HistorySite.vue')
  },
  {
    meta: {
      title: 'About Us'
    },
    path: '/aboutUs',
    name: 'About Us',
    component: () => import('@/Views/customer/AboutUsSite.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})
router.beforeEach((to, from, next) => {
  const titleFromParams = to.params?.pageTitle

  if (titleFromParams) {
    document.title = `${titleFromParams} - ${document.title}`
  } else {
    document.title = to.meta?.title ?? 'SGSW'
  }

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title
  next()
})

export default router

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes,
// });

// router.beforeEach((to, from, next) => {
// 	const titleFromParams = to.params?.pageTitle;

// 	if (titleFromParams) {
// 		document.title = `${titleFromParams} - ${document.title}`;
// 	} else {
// 		document.title = to.meta?.title ?? "SGSW";
// 	}

// 	const nearestWithTitle = to.matched
// 		.slice()
// 		.reverse()
// 		.find((r) => r.meta && r.meta.title);

// 	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
// 	next();
// });

// export default router;
