export default {
    name: 'appsus-app-header',
    template: `
    <section class="appsus-app-header">
        <nav class="main-nav">
            <div @click="onGoHome" class="nav-img">
                <img src="./assets/imgs/eye-img.png" />         
            </div>
            <div class="screen" @click="toggleMenu"></div>
            <i @click="toggleMenu"class="fas fa-bars hamburger-sign"></i>
            <ul class="main-nav-list" v-if="isShowNavBar"> 
                <!-- main-nav should be hidden, add toggle function when clicking button  -->
                <li @click="toggleMenu"><router-link to="/" >Home</router-link></li>
                <li @click="toggleMenu"><router-link to="/email" >Mister Email</router-link></li>
                <li @click="toggleMenu"><router-link to="/keep" >Miss Keep</router-link></li>
                <li @click="toggleMenu"><router-link to="/book" >Miss Books</router-link></li>
                <li @click="toggleMenu"><router-link to="/about" >About Us</router-link></li>
            </ul>
        </nav>
    </section>
    `,
    data() {
        return {
            isShowNavBar: false,
        }
    },
    methods: {
        onGoHome() {
            this.$router.push('/')
        },
        toggleMenu() {
            this.isShowNavBar = !this.isShowNavBar;
            document.body.classList.toggle('menu-open');
        }
    }
}