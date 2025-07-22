import {createRouter as createRouter, createWebHistory} from 'vue-router'
import useStore from 'vuex'

const routes = [
    {
        path : '/FrontPageView',
        name : 'frontPage',
        component: 'HomeView',
        meta : { 
            requiresAuth: false
        }
    }
];

const router = createRouter(
    {
        history : createWebHistory(),
        routes: routes
    }
);

// this function is only necessary when there is authorization
// router.beforeEach((to) => {

//   // Get the Vuex store
//   const store = useStore();

//   // Determine if the route requires Authentication
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

//   // If it does and they are not logged in, send the user to "/login"
//   if (requiresAuth && store.state.token === '') {
//     return {name: "login"};
//   }
//   // Otherwise, do nothing and they'll go to their next destination
// });

export default router;