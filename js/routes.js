import appsusApp from './pages/appsus-app.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import missKeep from './pages/keep-app.cmp.js';
import misterEmail from './pages/email-app.cmp.js';
// import keepEdit from '../appsus/keep/pages/keep-edit.cmp.js'
import emailDetails from '../appsus/email/pages/email-details.cmp.js'
import emailCompose from '../appsus/email/cmps/email-compose.cmp.js'
import emailList from '../appsus/email/cmps/email-list.cmp.js'
import bookApp from './pages/book-app.cmp.js';
import bookDetails from '../appsus/books/pages/book-details.cmp.js';
import bookAdd from '../appsus/books/pages/book-add.cmp.js';


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
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    // {
    //     path: '/book/add',
    //     component: bookAdd
    // },
    // {
    //     path: '/keep/edit/:keepId',
    //     component: keepEdit
    // },
    ,
    {

        path: '/email',
        component: misterEmail,
        children: [{
                path: '/',
                component: emailList,
                children: [{
                        path: 'compose/:emailId?',
                        component: emailCompose
                    },
                    {
                        path: ':emailId',
                        component: emailDetails
                    }
                ]
            },

        ]
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })