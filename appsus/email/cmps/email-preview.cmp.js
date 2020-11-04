import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
    <section class="email-preview">
        <label for="marked">{{email.isMarked}}</label>
        <input type="checkbox" id="marked" v-model="email.isMarked">
        <span>{{email.from}}</span>
        <span> <h2>{{email.subject}}</h2> </span>
        <span>{{emailBody}}</span>
        <span>{{emailTime}}</span>
    </section>

    `,
    data() {
        return {}
    },
    computed: {
        emailBody() {
            return this.email.body.substring(0, 20) + '...'
        },
        emailTime() {
            return emailService.getTimeToShow(this.email.sentAt)
        }
    }
}