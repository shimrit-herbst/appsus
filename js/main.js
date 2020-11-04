import { myRouter } from './routes.js'
import appsusHeader from './cmp/header.cmp.js'
import appsusFooter from './cmp/footer.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="appsus">
            <appsus-header/>    
            <main>
                <router-view></router-view>
            </main>
            
            <appsus-footer/>    
        </section>
        
    `,
    components: {
        appsusHeader,
        appsusFooter

    }
}

const app = new Vue(options)