import { utilService } from "../../../js/services/util-service.js";
import { emailService } from "../services/email-service.js";
import { eventBus } from '../../../js/services/event-bus-service.js'


export default {
    name: 'email-compose',
    template: `
    <section class="email-compose">
        <input type="email" v-model="email.to" placeholder="To"/>
        <!-- <hr/> -->
        <input type="text" v-model="email.subject" placeholder="Subject"/>
        <!-- <hr/> -->
        <textarea v-model="email.body" name="review" rows="20" cols="40"></textarea>
        <button @click="sendMail">Send</button>
        
    </section>
    `,
    data() {
        return {
            email: {
                id: utilService.createId(),
                to: '',
                subject: '',
                body: '',
                isRead: false,
                from: 'Me',
                isMarked: false,
                sentAt: null
            },
            newEmail: {
                id: utilService.createId(),
                to: '',
                subject: '',
                body: '',
                isRead: false,
                from: 'Me',
                isMarked: false,
                sentAt: null
            }
        }
    },
    methods: {
        sendMail() {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(this.email.to)) {
                alert('enter valid email please!')
                return
            }
            if (this.email.subject === '' && this.email.body === '') {
                alert('cant send an empty email.')
                return
            }
            if (this.email.to === 'Me') eventBus.$emit('updateUnread', 1)
            this.email.sentAt = Date.now();
            emailService.sendMail(this.email);
            this.email = this.newEmail;
            this.$router.push('/email')
        },
    },
    watch: {
        '$route.params.emailId' (emailId) {
            emailService.getEmailById(emailId)
                .then(email => {
                    this.mail.subject = 'Re:'
                    console.log(email);
                })

        }
    },
}