// import homePage from '../pages/home-page.cmp.js'
// import aboutPage from '../pages/about-page.cmp.js'
import missKeep from '../pages/keep-app.cmp.js'
import misterEmail from '../pages/email-app.cmp.js'


export default {
    name: 'appsus-app',
    template: `
    <section class="appsus-app">
        <h2>APPSUS</h2>
            <h3>Mister Email</h3>
            <h3>Miss Keep</h3>
            <h3>Miss Books</h3>
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
    created() { }





}