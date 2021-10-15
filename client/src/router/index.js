import { createRouter, createWebHistory } from 'vue-router'
import Session from '../services/session';
import Home from '../views/Home.vue';
import Activity from '../views/Activity.vue';
import Workouts from '../views/Workouts.vue';
import Meals from '../views/Meals.vue';
import Friends from '../views/Friends.vue';
import Profile from '../views/Profile.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/activity',
        name: 'Activity',
        component: Activity,
       // meta: { requiresLogin: true }
      },
      {
        path: '/workouts',
        name: 'Workouts',
        component: Workouts,
       // meta: { requiresLogin: true }
    },
    {
        path: '/meals',
        name: 'Meals',
        component: Meals,
        //meta: { requiresLogin: true }
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends,
     // meta: { requiresLogin: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    //meta: { requiresLogin: true }
},
    {
        path: '/login',
        name: 'Login',
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
