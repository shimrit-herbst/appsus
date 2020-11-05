import emailList from '../../appsus/email/cmps/email-list.cmp.js'
import emailDetails from '../../appsus/email/pages/email-details.cmp.js'
import { emailService } from '../../appsus/email/services/email-service.js'
import emailFilter from '../../appsus/email/cmps/email-filter.cmp.js'



export default {
    name: 'mister-email',
    template: `
    <section class="mister-email">
        <header class="email-header">
            <h1>Mister Email</h1>
            <input type="text" v-model="searchTxt" placeholder="Search" @input="onSearch">
        </header>

        <button class="compose-btn" @click="composeMail" >+ Compose</button>

        <div class="email-body">
            <email-filter :unreadMail="unreadEmailsCount"/>
            <router-view></router-view>
        </div>
    </section>
    `,
    components: {
        emailList,
        emailDetails,
        emailFilter
    },
    data() {
        return {
            unreadEmailsCount: 0,
            searchTxt: '',
        }
    },
    methods: {
        onSearch() {
            console.log('mail to show', this.searchTxt);
        },
        showDetails() {
            this.isShowList = false;
            console.log('show details');
        },
        composeMail() {
            this.$router.push('/email/compose')
        },
    },
    created() {

    }
}