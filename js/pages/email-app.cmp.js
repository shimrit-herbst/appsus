import emailList from '../../appsus/email/cmps/email-list.cmp.js'
import emailDetails from '../../appsus/email/pages/email-details.cmp.js'
import { emailService } from '../../appsus/email/services/email-service.js'


export default {
    name: 'mister-email',
    template: `
    <section class="mister-email">
        <header class="email-header">
            <h1>Mister Email</h1>
            <input type="text" v-model="searchTxt" placeholder="Search" @input="onSearch">
        </header>
        <button class="compose-btn" @click="composeMail">+ Compose</button>
        <!-- {{searchTxt}}
        {{emails}} -->
        
        <email-list v-if="isShowList" :emails="emailsToShow" @onShowDetails="showDetails"/>
        <email-details :email="emailToDisplay"/>
    </section>
    `,
    components: {
        emailList,
        emailDetails
    },
    data() {
        return {
            emails: [],
            searchTxt: '',
            isShowList: true,
            emailToDisplay: null,
        }
    },
    methods: {
        onSearch() {
            console.log('mail to show', this.searchTxt);
        },
        showDetails(emailId) {
            this.isShowList = false;
            emailService.getEmailById(emailId)
                .then(email => this.emailToDisplay = email);
        },
        composeMail() {
            this.$router.push('/email/compose')
        }
    },
    computed: {
        emailsToShow() {
            return this.emails;
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
    }
}