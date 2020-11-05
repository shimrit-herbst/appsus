import { utilService } from "../../../js/services/util-service.js";
import { emailService } from "../services/email-service.js";

export default {
    name: 'email-compose',
    template: `
    <section class="email-compose">
        <input type="text" v-model="mail.to" placeholder="To"/>
        <hr/>
        <input type="text" v-model="mail.subject" placeholder="Subject"/>
        <hr/>
        <textarea v-model="mail.body" name="review" rows="20" cols="40"></textarea>
        <button @click="sendMail">Send</button>
        
    </section>
    `,
    data() {
        return {
            mail: {
                id: utilService.createId(),
                to: '',
                subject: '',
                body: '',
                isRead: false,
                from: 'Me',
                isMarked: false,
                sentAt: null
            },
            newMail: {
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
            this.mail.sentAt = Date.now();
            emailService.sendMail(this.mail);
            this.mail = this.newMail;
            this.$router.push('/email')
        },
    }
}