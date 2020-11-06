import { emailService } from '../services/email-service.js'
import emailPreview from './email-preview.cmp.js'
import { eventBus } from "../../../js/services/event-bus-service.js"

export default {
    name: 'email-list',
    template: `
    <section class="email-list" v-if="emails">
        <ul class="email-list-container">
            <li v-for="email in getEmailsToShow" :key="email.id" >
                <div class="list-fetures"> 
                    <i v-if="email.isSelected" @click="toggleSelected(email.id,-1)" class="fas fa-square"></i>             
                    <i v-else="email.isSelected" @click="toggleSelected(email.id,1)" class="far fa-square"></i>                
                    <template v-if="isInbox(email.to)">
                        <i class="fa fas fa-star" :class="{gold: email.isMarked}" @click="markEmail(email.id)"></i>
                        <i v-if="email.isRead" @click="toggleRead(email.id,1)" class="fa fas fa-envelope-open"></i>
                        <i v-else="email.isRead" @click="toggleRead(email.id,-1)" class="fa fas fa-envelope"></i>
                    </template>
                        <i  @click="onRemove(email.id)" class="fa fas fa-trash-alt"></i>
                </div>
                <email-preview :email="email" @click.native ="onSelected(email.id)" :class="{read: email.isRead}"/>
            </li>
        </ul>
        <div class="router-email-child">
            <router-view></router-view>
        </div>
    </section>
    `,
    data() {
        return {
            emails: undefined,
            filterBy: {
                searchTxt: '',
                status: 'All',
                fromTo: 'inbox',
                isTrash: false,
                isMarked: false,
                isSelected: false
            },
            selectedCounter: 0,
        }
    },
    components: {
        emailPreview,
    },
    methods: {
        onSelected(emailId) {
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
        },
        onRemove(emailId) {
            console.log('remove to trash');
            emailService.removeToTrash(emailId);
        },
        toggleRead(emailId, diff) {
            eventBus.$emit('updateUnread', diff)
            emailService.toggleRead(emailId)
        },
        toggleSelected(emailId, diff) {
            emailService.toggleSelected(emailId)
                .then(diff => {
                    eventBus.$emit('selectedBtns', diff)
                })
        },
        markEmail(emailId) {
            emailService.markEmail(emailId);
        },
        isInbox(emailTo) {
            return emailTo === 'Me'
        },
    },
    computed: {
        getEmailsToShow() {
            const searchTxt = this.filterBy.searchTxt.toLowerCase();
            var emailsToShow = JSON.parse(JSON.stringify(this.emails));
            if (this.filterBy.isTrash) return emailsToShow.filter(email => email.isTrash)
            if (this.filterBy.isMarked) return emailsToShow.filter(email => email.isMarked)
            emailsToShow = emailsToShow.filter(email => !email.isTrash)
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
            this.filterBy.isTrash = false;
            this.filterBy.isMarked = false;
            this.$router.push('/email')
            this.changeFilter(filter)
        })
        eventBus.$on('searchMails', searchTxt => this.filterBy.searchTxt = searchTxt);
        eventBus.$on('showTrash', () => {
            this.filterBy.isTrash = true;
        })
        eventBus.$on('showMarked', () => {
            this.filterBy.isMarked = true;
        })

        emailService.getEmails()
            .then(emails => this.emails = emails)

    }
}