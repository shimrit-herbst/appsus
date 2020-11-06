// import homePage from '../pages/home-page.cmp.js'
// import aboutPage from '../pages/about-page.cmp.js'
import missKeep from '../pages/keep-app.cmp.js'
import misterEmail from '../pages/email-app.cmp.js'


export default {
    name: 'appsus-app',
    template: `
    <section class="appsus-app">
        <h2 class="appsus-name">APPSUS</h2>
        <div class="inner-apps-names">
            <h3><span class="first-letter">M</span>ister Email</h3>
            <h3><span class="first-letter">M</span>iss Keep</h3>
            <h3><span class="first-letter">M</span>iss Books</h3>
        </div>
        <div class="svg-shape-wrapper">
            <ul>
                <li class="red-triangle">
                    <svg class="svg-shape-1" xmlns="http://www.w3.org/2000/svg" width="119.33" height="78.82" viewBox="0 0 119.33 78.82" style="visibility: inherit; opacity: 1; transform: matrix(0.72667, 0.68698, -0.68698, 0.72667, 0, 0);">
                        <path class="st0" d="M119.33 0L0 52.508 15.424 78.82z"></path>
                    </svg>
                </li>
                <li class="leaf">
                    <svg class="svg-shape-2" xmlns="http://www.w3.org/2000/svg" width="88.253" height="76.97" viewBox="0 0 88.253 76.97" style="visibility: inherit; opacity: 1; transform: matrix(0.74313, 0.66913, -0.66913, 0.74313, 0, 0);">
                        <path class="st0" d="M86.268 76.496S108.766 6 2.272 0c0 0-24 83.996 83.996 76.496z"></path>
                    </svg>                    
                </li>
                <li class="yellow-triangle">
                    <svg class="svg-shape-3" xmlns="http://www.w3.org/2000/svg" width="90.33" height="112.441" viewBox="0 0 90.33 112.441" style="visibility: inherit; opacity: 1; transform: matrix(0.74313, 0.66913, -0.66913, 0.74313, 0, 0);">
                        <path class="st0" d="M0 0l65.98 112.44 24.35-18.368z"></path>
                    </svg>
                </li>
                <li class="turquoise-triangle">
                    <svg class="svg-shape-4" xmlns="http://www.w3.org/2000/svg" width="77.385" height="30.427" viewBox="0 0 77.385 30.427" style="visibility: inherit; opacity: 1; transform: matrix(0.74313, 0.66913, -0.66913, 0.74313, 0, 0);">
                        <path class="st0" d="M0 10.133l75.278 20.294L77.385 0z"></path>
                    </svg>
                </li>
                <li class="green-triangle">
                    <svg class="svg-shape-5" xmlns="http://www.w3.org/2000/svg" width="29.087" height="26.609" viewBox="0 0 29.087 26.609" style="visibility: inherit; opacity: 1; transform: matrix(0.74313, 0.66913, -0.66913, 0.74313, 0, 0);">
                        <path class="st0" d="M7.383 0L0 26.61l29.087-9.177z"></path>
                    </svg>
                </li>
                <li class="dot">
                    <svg class="svg-shape-6" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" style="visibility: inherit; opacity: 1; transform: matrix(0.74313, 0.66913, -0.66913, 0.74313, 0, 0);">
                        <circle class="st0" cx="7.5" cy="7.5" r="7.5"></circle>
                    </svg>
                </li>
                <li class="small-triangle">
                    <svg class="svg-shape-7" version="1" id="triangle-border" xmlns="http://www.w3.org/2000/svg" width="33.506" height="30.451" viewBox="0 0 33.506 30.451" style="visibility: inherit; opacity: 1; transform: matrix(0.74313, 0.66913, -0.66913, 0.74313, 0, 0);">
                        <path class="st0" d="M1.74 28.71L15.078 1.74l16.69 25.037z"></path>
                    </svg>
                </li>
            </ul>
        </div>
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