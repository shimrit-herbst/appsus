import { emailService } from '../services/email-service.js'




export default {
    name: 'email-details',
    template: `
    <section v-if="email" class="email-details">
            <div class="short-details">
                <h2>Subject: {{email.subject}}</h2>
                <span>From: {{email.from}}</span>
                <span>{{emailTime}}</span>
                <span><p>{{email.body}}</p></span>
                <button @click="onReply">Replay</button>
            </div>
        </section>

    `,
    data() {
        return {
            email: null,
        }
    },
    computed: {
        emailTime() {
            return emailService.getTimeToShow(this.email.sentAt)
        }

    },
    methods: {
        onReply() {
            console.log('replaying');
        }
    },
    created() {
        const emailId = this.$route.params.emailId
        if (emailId) {
            emailService.getEmailById(emailId)
                .then(email => {
                    this.email = email
                })
        }

    }
}