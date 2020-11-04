import emailList from '../../appsus/email/cmps/email-list.cmp.js'
import emailFilter from '../../appsus/email/cmps/email-filter.cmp.js'
import emailDetails from '../../appsus/email/pages/email-details.cmp.js'
import { appsusService } from '../services/appsus-service.js'


export default {
    name: 'mister-email',
    template: `
    <section class="mister-email">
        <h1>Mister Email</h1>
        <button class="compose-btn">+</button>
        <input type="text" v-model="searchTxt" placeholder="Search" @input="onSearch">
        <!-- {{searchTxt}}
        {{emails}} -->
        <email-filter/>
        <email-list v-if="isShowList" :emails="emailsToShow" @onShowDetails="showDetails"/>
        <email-details :email="emailToDisplay"/>
    </section>
    `,
    components: {
        emailList,
        emailFilter,
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
            appsusService.getEmailById(emailId)
                .then(email => this.emailToDisplay = email);
        }
    },
    computed: {
        emailsToShow() {
            return this.emails;
        }
    },
    created() {
        appsusService.getEmails()
            .then(emails => this.emails = emails)
    }
}