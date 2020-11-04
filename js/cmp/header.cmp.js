export default {
    name: 'appsus-app-header',
    template: `
    <section class="appsus-app-header">
        <h1>AppSus</h1>
        <nav>
            <router-link to="/" >Home</router-link>|
            <router-link to="/miss-keep" >Miss Keep</router-link>|
            <router-link to="/mister-email" >Mister Email</router-link>|
            <router-link to="/about" >About Us</router-link>|
        </nav>
    </section>
    `,
}