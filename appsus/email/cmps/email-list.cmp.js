import { emailService } from '../services/email-service.js'
import emailPreview from './email-preview.cmp.js'
import { eventBus } from "../../../js/services/event-bus-service.js"

export default {
    name: 'email-list',
    template: `
    <section class="email-list">
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
            emailsToShow: this.filterMail('inbox'),
            emails: undefined
        }
    },
    components: {
        emailPreview,
    },
    methods: {
        selected(emailId) {
            this.$emit('onShowDetails')
            emailService.markReadEmail(emailId)
                .then(isReadBefore => {
                    // console.log(isReadBefore, 'checkingggg');
                    if (isReadBefore) eventBus.$emit('updateUnread', -1)
                })
            this.$router.push('/email/' + emailId)
        },
        filterMail(filter) {
            // console.log('filtering', filter);
            if (filter === 'all') {
                // console.log(this.emailsToShow);
                this.emailsToShow = this.emails;
                // console.log(this.emailsToShow);
            } else {
                emailService.filterMails(filter)
                    .then(emailsToShow => this.emailsToShow = emailsToShow)
            }
        },
    },
    created() {
        eventBus.$on('filterMails', filter => {
            this.emailsToShow = this.filterMail(filter)
        })
        emailService.getEmails()
            .then(emails => this.emails = emails)
    }
}