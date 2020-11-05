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
            if (this.email.body.length > 20) return this.email.body.substring(0, 20) + '...'
            return this.email.body
        },
        emailTime() {
            return emailService.getTimeToShow(this.email.sentAt)
        }
    }
}