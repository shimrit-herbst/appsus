export default {
    name: 'appsus-app-header',
    template: `
    <section class="appsus-app-header">
        <nav class="main-nav">
            <div class="nav-img">
                <img src="http://luminouspil.com/app/themes/luminouspil/dist/images/luminous_logo.png" />          
            </div>
            <div class="screen" @click="toggleMenu"></div>
            <button class="hamburger-sign">☰</button>
            <ul class="main-nav-list" @click="toggleMenu"> 
                <!-- main-nav should be hidden, add toggle function when clicking button  -->
                <li><router-link to="/" >Home</router-link></li>
                <li><router-link to="/email" >Mister Email</router-link></li>
                <li><router-link to="/keep" >Miss Keep</router-link></li>
                <li><router-link to="/book" >Miss Books</router-link></li>
                <li><router-link to="/about" >About Us</router-link></li>
            </ul>
        </nav>
    </section>
    `,
    methods: {
        toggleMenu() {
            document.body.classList.toggle('menu-open');
        }
    }
}

