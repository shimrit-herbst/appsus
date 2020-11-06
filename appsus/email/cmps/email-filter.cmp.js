import { eventBus } from "../../../js/services/event-bus-service.js"
import { emailService } from "../services/email-service.js"


export default {
    template: `
    <section class="email-filter">
        <span @click="onFilterMails('inbox')"><i class="fas fa-inbox"></i> Inbox  ({{unreadEmailsCount}}) </span>
        <!-- <span @click="onFilterMails('all')">All</span> -->
        <span @click="onShowMarked"><i class="fa fas fa-star"></i>  Marked  </span>
        <span @click="onShowTrash"><i class="fa fas fa-trash-alt"></i>  Trash  </span>
        <span @click="onFilterMails('sent')"><i class="fas fa-paper-plane"></i>  Sent  </span>
        <span @click="filterByStatus('Read')"><i class="fa fas fa-envelope-open"></i> Read</span>
        <span @click="filterByStatus('Unread')"><i class="fa fas fa-envelope"></i> Unread</span>
        <span @click="filterByStatus('All')">All</span>
        
                        
        <!-- <div>

            <select v-model="filterBy.status" >
                <option>Read</option>
                <option>Unread</option>
                <option>All</option>
            </select>
        </div> -->
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
        filterByStatus(filter) {
            this.filterBy.status = filter
        },
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