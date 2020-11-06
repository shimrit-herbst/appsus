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
        <span @click="onFilterMails('inbox')">Inbox  ({{unreadEmailsCount}}) <i class="fas fa-inbox"></i></span>
        <!-- <span @click="onFilterMails('all')">All</span> -->
        <span @click="onShowMarked">Marked  <i class="fa fas fa-star"></i></span>
        <span @click="onShowTrash">Trash  <i class="fa fas fa-trash-alt"></i></span>
        <span @click="onFilterMails('sent')">Sent  <i class="fas fa-paper-plane"></i></span>
    </section>
    `,
    data() {
        return {
            filterBy: {
                searchTxt: '',
                status: 'All',
                fromTo: 'inbox',
            },
            unreadEmailsCount: 0,
        }
    },
    methods: {
        onShowMarked() {
            console.log('show marked');
            eventBus.$emit('showMarked')
        },
        onFilterMails(filter) {
            this.filterBy.fromTo = filter
            eventBus.$emit('filterMails', this.filterBy)
        },
        onShowTrash() {
            eventBus.$emit('showTrash')
        },
        updateCounter() {
            console.log('updationg');
            emailService.countUnreadEmails()
                .then(res => this.unreadEmailsCount = res)
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
        eventBus.$on('updateUnreadCounter', () => this.updateCounter())

    },
}