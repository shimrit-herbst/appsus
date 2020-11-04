import { appsusService } from '../services/appsus-service.js'
// import homePage from '../pages/home-page.cmp.js'
// import aboutPage from '../pages/about-page.cmp.js'
import missKeep from '../pages/keep-app.cmp.js'
import misterEmail from '../pages/email-app.cmp.js'


export default {
    name: 'appsus-app',
    template: `
    <section class="appsus-app">
        <h2>APPSUS MAIN PAGE</h2>
    </section>
    `,
    components: {
        misterEmail,
        missKeep
    },
    data() {
        return {

        }
    },
    methods: {},
    computed: {},
    created() {}





}