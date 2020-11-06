import { utilService } from "../../../js/services/util-service.js";
import { emailService } from "../services/email-service.js";
import { eventBus } from '../../../js/services/event-bus-service.js'


export default {
    name: 'email-compose',
    template: `
    <section class="email-compose">
        <header>
            <h3>New Mail</h3>
            <div>
                <i @click="sendMail" class="fas fa-paper-plane"></i>
                <i @click="closeCompose" class="far fa-times-circle"></i>
            </div>
        </header>
        <main>
            <input type="email" v-model="email.to" placeholder="To"/>
            <input type="text" v-model="email.subject" placeholder="Subject"/>
            <textarea v-model="email.body" name="review" rows="15" cols="60"></textarea>
        </main>
        
    </section>
    `,
    data() {
        return {
            email: {
                id: utilService.createId(),
                to: 'Me@gmail.com',
                subject: '',
                body: '',
                isRead: false,
                from: 'Me@gmail.com',
                isMarked: false,
                sentAt: null
            },
            newEmail: {
                id: utilService.createId(),
                to: 'Me@gmail.com',
                subject: '',
                body: '',
                isRead: false,
                from: 'Me@gmail.com',
                isMarked: false,
                sentAt: null
            }
        }
    },
    methods: {
        closeCompose() {
            this.$router.push('/email')
        },
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
            if (this.email.to === 'Me@gmail.com') eventBus.$emit('updateUnread', 1)
            this.email.sentAt = Date.now();
            emailService.sendMail(this.email);
            this.email = this.newEmail;
            this.$router.push('/email')
        },
    },
    created() {
        if (this.$route.params.emailId) {
            emailService.getEmailById(this.$route.params.emailId)
                .then(email => {
                    this.email.to = email.from
                    this.email.subject = 'Re:' + email.subject
                    console.log(email);
                })
        }

    }
}