import { emailService } from '../services/email-service.js'
import emailPreview from './email-preview.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-list">
        <email-filter @filterMails="filterMail" :unreadMail="unreadEmailsCount"/>
        <ul class="email-list-container">
            <li v-for="email in emailsToShow" :key="email.id" :class="{read: email.isRead}">
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
            emailService.markReadEmail(emailId)
            this.$router.push('/email/' + emailId)
        },
        filterMail(filter) {
            console.log('filtering', filter);
            if (filter === 'all') {
                console.log(this.emails);
                this.emailsToShow = this.emails;
                return;
            }
            emailService.filterMails(filter)
                .then(emailsToShow => this.emailsToShow = emailsToShow)
        }
    },
    computed: {

    },

    created() {
        emailService.countUnredEmails()
            .then(res => this.unreadEmailsCount = res)
        this.emailsToShow = this.filterMail('inbox');
    }
}