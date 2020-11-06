export default {
    name: 'appsus-app-header',
    template: `
    <section class="appsus-app-header">
        <nav>
            <router-link to="/" >Home</router-link>|
            <router-link to="/email" >Mister Email</router-link>|
            <router-link to="/keep" >Miss Keep</router-link>|
            <!-- <router-link to="/book" >Miss Books</router-link>| -->
            <router-link to="/about" >About Us</router-link>|
            <img src="http://luminouspil.com/app/themes/luminouspil/dist/images/luminous_logo.png" />          
        </nav>
    </section>
    `,
}