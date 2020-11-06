import emailList from '../../appsus/email/cmps/email-list.cmp.js'
import emailDetails from '../../appsus/email/pages/email-details.cmp.js'
import emailFilter from '../../appsus/email/cmps/email-filter.cmp.js'
import { eventBus } from '../services/event-bus-service.js'
import { emailService } from '../../appsus/email/services/email-service.js'



export default {
    name: 'mister-email',
    template: `
    <section class="mister-email">
        <header class="email-header">
            <h1>Mister Email</h1>
            <input type="text" v-model="searchTxt" placeholder="Search" @input="onSearch">
        </header>

        <button class="compose-btn" @click="composeMail" >Compose</button>
        <div class="selectBtns">

            <template v-if="isInboxFilter">
                <i v-if="isSelectAll" @click="onToggleSelectedAll" class="fas fa-square"></i>             
                <i v-else="isSelectAll" @click="onToggleSelectedAll" class="far fa-square"></i>
            </template>
            <template  v-if="isShowBtns">
                <i class="fa fas fa-star" :class="{gold: !isToggleToStar} " @click="toggleAllMarked"></i>
                <i v-if="istoggleToRead" @click="toggleAllRead" class="fa fas fa-envelope-open"></i>
                <i v-else="istoggleToRead" @click="toggleAllRead" class="fa fas fa-envelope"></i>
                <i  class="fa fas fa-trash-alt" @click="onDeleteAll" ></i>
            </template>
        </div>
        <div class="email-body">
            <email-filter :unreadMail="unreadEmailsCount"/>
            <router-view></router-view>
        </div>
    </section>
    `,
    data() {
        return {
            unreadEmailsCount: 0,
            searchTxt: '',
            isShowBtns: false,
            istoggleToRead: false,
            isToggleToStar: true,
            isSelectAll: false,
            selectedCounter: 0,
            isInboxFilter: true,
            // isShowDeleteBtn = false
        }
    },
    methods: {
        onSearch() {
            eventBus.$emit('searchMails', this.searchTxt);
        },
        showDetails() {
            this.isShowList = false;
            console.log('show details');
        },
        composeMail() {
            this.$router.push('/email/compose')
        },
        toggleIsShowBtns() {
            this.isShowBtns = this.selectedCounter > 0
        },
        toggleAllRead() {
            var istoggleToUnread = true
            if (this.istoggleToRead) istoggleToUnread = false
            this.istoggleToRead = !this.istoggleToRead
            emailService.toggleAllRead(istoggleToUnread)
            eventBus.$emit('updateUnreadCounter')
        },
        toggleAllMarked() {
            var isToggleToStar = true
            if (!this.isToggleToStar) isToggleToStar = false
            this.isToggleToStar = !this.isToggleToStar
            emailService.toggleAllMarked(isToggleToStar)
        },
        onDeleteAll() {
            emailService.removeAllToTrash()
        },
        onToggleSelectedAll() {
            this.isSelectAll = !this.isSelectAll
            if (this.isSelectAll) {
                var diff = 1;
                emailService.toggleAllSelected(this.isSelectAll, diff)
                    .then(res => {
                        this.selectedCounter += res
                        this.toggleIsShowBtns()
                    })
            } else {
                diff = -1;
                emailService.toggleAllSelected(this.isSelectAll, diff)
                    .then(res => {
                        this.selectedCounter += res
                        console.log(this.selectedCounter);
                        this.toggleIsShowBtns()
                    })
            }

        }
    },
    components: {
        emailList,
        emailDetails,
        emailFilter
    },
    created() {
        eventBus.$on('showTrash', () => this.isShowDeleteBtn = true)
        eventBus.$on('filterMails', filter => {
            console.log('filter', filter.fromTo)
            this.isInboxFilter = (filter.fromTo === 'inbox')
        })
        eventBus.$on('showTrash', () => this.isInboxFilter = false)
        eventBus.$on('showMarked', () => this.isInboxFilter = false)
        emailService.getSelectedCounter()
            .then(res => {
                console.log(res, 'counter is');
                this.selectedCounter = res;
                this.isShowBtns = res > 0;
            })
        eventBus.$on('selectedBtns', (diff) => {
            this.selectedCounter += diff;
            console.log(this.selectedCounter, diff);
            this.toggleIsShowBtns()
        })


    }
}

// this.selectedCounter += diff
//             if (this.selectedCounter < 2) {
//                 console.log(this.selectedCounter);
//             }