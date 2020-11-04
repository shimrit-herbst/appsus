import appsusApp from './pages/appsus-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import missKeep from './pages/keep-app.cmp.js';
import misterEmail from './pages/email-app.cmp.js';




const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/appsus-app',
        component: appsusApp
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/miss-keep',
        component: missKeep
    },
    {
        path: '/mister-email',
        component: misterEmail
    },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
]

export const myRouter = new VueRouter({ routes: myRoutes })