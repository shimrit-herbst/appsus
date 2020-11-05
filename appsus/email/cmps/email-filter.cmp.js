import { eventBus } from "../../../js/services/event-bus-service.js"
import { emailService } from "../services/email-service.js"


export default {
    template: `
    <section class="email-filter">
        <div>
            <select v-model="filterBy.status" >
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
                searchTxt: '',
                status: 'All',
                fromTo: 'inbox'
            },
            unreadEmailsCount: 0,
        }
    },
    methods: {
        onFilterMails(filter) {
            this.filterBy.fromTo = filter
            eventBus.$emit('filterMails', this.filterBy)
        }
    },
    computed: {
        filterChange() {
            return this.filterBy.status;
        }
    },
    watch: {
        filterChange() {
            console.log('filter change', this.filterBy.status);
            eventBus.$emit('filterMails', this.filterBy)
        }
    },
    created() {
        eventBus.$on('updateUnread', diff => {
            this.unreadEmailsCount += diff;
        })
        emailService.countUnreadEmails()
            .then(res => this.unreadEmailsCount = res)
    },
}