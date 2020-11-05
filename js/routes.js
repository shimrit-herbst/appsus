import appsusApp from './pages/appsus-app.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import missKeep from './pages/keep-app.cmp.js';
import misterEmail from './pages/email-app.cmp.js';
import emailDetails from '../appsus/email/pages/email-details.cmp.js'
import emailCompose from '../appsus/email/cmps/email-compose.cmp.js'



const myRoutes = [{
        path: '/',
        component: appsusApp
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/keep',
        component: missKeep
    },
    {
        path: '/email',
        component: misterEmail
    },
    {
        path: '/email/compose',
        component: emailCompose
    },
    {
        path: '/email/:emailId',
        component: emailDetails
    }
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