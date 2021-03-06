import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Home from '../views/Home.vue';
import Workouts from '../views/Workouts.vue';
import Meals from '../views/Meals.vue';
import Friends from '../views/Friends.vue';
import Profile from '../views/Profile.vue';
import Signup from '../views/SignUp.vue'

const routes = [ 
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/workouts',
        name: 'Workouts',
        component: Workouts,
        meta: { requiresLogin: true }
    },
    {
        path: '/meals',
        name: 'Meals',
        component: Meals,
        meta: { requiresLogin: true }
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends,
      meta: { requiresLogin: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresLogin: true }
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: Signup,
    },
    {
    path: '/users',
    name: 'Users',
    // @ts-ignore
    component: () => import(/* webpackChunkName: "admin" */ '../views/Users.vue')
    },
    {
      path: '/login',
      name: 'Login',
      // @ts-ignore
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !Session.user){
        next('/login');
    }else{
        next();
    }
  } )

export default router
