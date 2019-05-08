import Vue from 'vue';
import Router from 'vue-router';

//Cookie
import Cookies  from 'cookies-js'

//Login
import Login from './layouts/Login.vue';

//Dashboard
import Dashboard from './layouts/Default.vue';

//Views
import PersonalBlog from './views/PersonalBlog.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import AddNewPost from './views/AddNewPost.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import BlogPosts from './views/BlogPosts.vue';
import AddNewEducation from './views/AddNewEducation.vue';

Vue.use(Router);

const router = new Router({
  //mode: 'history',
  //base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: 'login',
      meta: {
        isAuth: true,
        requiredAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/blog-overview',
      component: Dashboard,
      meta: {
        requiredAuth: true
      },
      children: [
        {
          path: 'blog-overview',
          name: 'blog-overview',
          component: PersonalBlog,
          meta: {
            requiredAuth: true
          }
        },
        {
          path: 'user-profile-lite',
          name: 'user-profile-lite',
          component: UserProfileLite,
          meta: {
            requiredAuth: true
          }
        },
        {
          path: 'add-new-post',
          name: 'add-new-post',
          component: AddNewPost,
          meta: {
            requiredAuth: true
          }
        },
        {
          path: 'components-overview',
          name: 'components-overview',
          component: ComponentsOverview,
          meta: {
            requiredAuth: true
          }
        },
        {
          path: 'blog-posts',
          name: 'blog-posts',
          component: BlogPosts,
          meta: {
            requiredAuth: true
          }
        },

        //J. Daza
        {
          path: 'add-new-education',
          name: 'add-new-education',
          component: AddNewEducation,
          meta: {
            requiredAuth: true
          }
        }
      ]
    },
    , {
      path: '*',
      redirect: '/errors',
    },
  ],
});

router.beforeEach((to, from, next) => {

  if (to.meta.requiredAuth) {
    let userId = Cookies.get('username')
    let isAuthUser = userId != undefined ? true : false
    if (isAuthUser) {
      next()
    } else {
      router.push('/')
    }
  } else {
    next()
  }

  if (to.meta.isAuth) {
    let userId = Cookies.get('username')
    let isAuthUser = userId != undefined ? true : false
    if (isAuthUser) {
      router.push('/panel')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router