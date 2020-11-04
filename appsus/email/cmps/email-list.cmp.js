import { appsusService } from '../../../js/services/appsus-service.js'
import emailPreview from './email-preview.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-list">
        <email-filter @filterMails="filterMails" :unreadMail="unreadEmailsCount"/>
        <ul class="email-list-container">
            <li v-for="email in emails" :key="email.id" :class="{read: email.isRead}">
                <label for="marked"></label>
                <input type="checkbox" id="marked" v-model="email.isMarked">
                <email-preview :email="email" @click.native ="selected(email.id)"/>
            </li>
        </ul>
        
    </section>
    `,
    data() {
        return {
            unreadEmailsCount: 0,
            emailsToShow: this.emails,
        }
    },
    components: {
        emailPreview,
        emailFilter,
    },
    methods: {
        selected(emailId) {
            appsusService.markReadEmail(emailId)
            console.log(this.emails);
            this.$router.push('/email/' + emailId)
        }
    },
    computed: {
        filterMails(filter) {
            console.log(filter);
        }
    },

    created() {
        appsusService.countUnredEmails()
            .then(res => this.unreadEmailsCount = res)
    }
}