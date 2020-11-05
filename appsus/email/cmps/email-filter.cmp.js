import { eventBus } from "../../../js/services/event-bus-service.js"
import { emailService } from "../services/email-service.js"


export default {
    // props: ['unreadMail'],
    template: `
    <section class="email-filter">
        <div>
            <select v-model="filterBy.mailStatus" >
                <option>Read</option>
                <option>Unread</option>
                <option>All</option>
            </select>
        </div>
        <button @click="onFilterMails('inbox')">Inbox  ({{unreadEmailsCount}})</button>
        <button @click="onFilterMails('sent')">Sent</button>
        <button @click="onFilterMails('all')">All</button>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                mailStatus: 'All'
            },
            unreadEmailsCount: 0,
        }
    },
    methods: {
        onFilterMails(filter) {
            // console.log(filter)
            eventBus.$emit('filterMails', filter)
        }
    },
    created() {
        eventBus.$on('updateUnread', diff => {
            console.log(diff, 'diff???');
            this.unreadEmailsCount += diff;
        })
        emailService.countUnredEmails()
            .then(res => this.unreadEmailsCount = res)
    }
}