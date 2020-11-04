export default {
    name: 'appsus-app-header',
    template: `
    <section class="appsus-app-header">
        <h1>AppSus</h1>
        <nav>
            <router-link to="/" >Home</router-link>|
            <router-link to="/keep" >Miss Keep</router-link>|
            <router-link to="/email" >Mister Email</router-link>|
            <router-link to="/about" >About Us</router-link>|
        </nav>
    </section>
    `,
}