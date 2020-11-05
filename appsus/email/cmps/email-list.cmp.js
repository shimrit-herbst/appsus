import { emailService } from '../services/email-service.js'
import emailPreview from './email-preview.cmp.js'
import { eventBus } from "../../../js/services/event-bus-service.js"

export default {
    name: 'email-list',
    template: `
    <section class="email-list" v-if="emails">
        <ul class="email-list-container">
            <li v-for="email in getEmailsToShow" :key="email.id" :class="{read: email.isRead}">
                <label for="marked"></label>
                <input type="checkbox" id="marked" v-model="email.isMarked">
                <email-preview :email="email" @click.native ="selected(email.id)"/>
            </li>
        </ul>
        
    </section>
    `,
    data() {
        return {
            emails: undefined,
            filterBy: {
                searchTxt: '',
                status: 'All',
                fromTo: 'inbox'
            },
        }
    },
    components: {
        emailPreview,
    },
    methods: {
        selected(emailId) {
            emailService.markReadEmail(emailId)
                .then(isReadBefore => {
                    console.log(isReadBefore, 'checkingggg');
                    if (!isReadBefore) eventBus.$emit('updateUnread', -1)
                })
            this.$router.push('/email/' + emailId)
        },
        changeFilter(filter) {
            this.filterBy.status = filter.status;
            this.filterBy.fromTo = filter.fromTo;
            console.log(this.filterBy);
        }
    },
    computed: {
        getEmailsToShow() {
            const searchTxt = this.filterBy.searchTxt.toLowerCase();
            var emailsToShow = JSON.parse(JSON.stringify(this.emails));
            emailsToShow = emailsToShow.filter(email => email.subject.toLowerCase().includes(searchTxt) || email.body.toLowerCase().includes(searchTxt));
            if (this.filterBy.status !== 'All') {
                emailsToShow = emailsToShow.filter(email => (email.isRead && this.filterBy.status === 'Read') || (!email.isRead && this.filterBy.status === 'Unread'))
            }
            console.log(this.filterBy.fromTo);
            if (this.filterBy.fromTo !== 'all') {
                if (this.filterBy.fromTo === 'inbox') {
                    emailsToShow = emailsToShow.filter(email => email.to === 'Me')
                } else emailsToShow = emailsToShow.filter(email => email.to !== 'Me')
            }


            return emailsToShow;
        }
    },
    created() {
        eventBus.$on('filterMails', filter => {
            this.$router.push('/email')
            this.changeFilter(filter)
        })
        eventBus.$on('searchMails', searchTxt => {
            console.log('search txt', searchTxt);
            this.filterBy.searchTxt = searchTxt;
        });
        emailService.getEmails()
            .then(emails => this.emails = emails)
    }
}