import { myRouter } from './routes.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="appsus">
                    <nav>
                        <router-link to="/" >Home</router-link>|
                        <router-link to="/appsus-app" >Appsus</router-link>|
                        <router-link to="/miss-keep" >Miss Keep</router-link>|
                        <router-link to="/mister-email" >Mister Email</router-link>|
                        <router-link to="/about" >About Us</router-link>|

                    </nav>
            <main>
                <router-view></router-view>
            </main>
        </section>
    `,
    components: {}
}

const app = new Vue(options)