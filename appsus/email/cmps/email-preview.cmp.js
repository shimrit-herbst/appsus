import { emailService } from '../services/email-service.js'

export default {
    props: ['email'],
    template: `
    <section class="email-preview">
        <span>{{email.subject}}</span>
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