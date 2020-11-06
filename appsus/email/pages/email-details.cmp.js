import { emailService } from '../services/email-service.js'




export default {
    name: 'email-details',
    template: `
    <section v-if="email" class="email-details">
        <div class="short-details">
            <section class="mail-header">
                <h2>{{email.subject}}</h2>
                <i @click="closeDetails" class="far fa-times-circle"></i> 
            </section>
            <section class="subtitle-mail">
                <span><span class="bold">From:</span> {{email.from}}</span>
                <span class="bold">{{emailTime}}</span>
            </section>
            <span><p>{{email.body}}</p></span>
            <i @click="onReply" class="fas fa-reply"></i>
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
        closeDetails() {
            this.$router.push('/email')
        },
        onReply() {
            console.log('replying');
            this.$router.push('/email/compose/' + this.email.id)
                // this.$router.push('/email/' + emailId)

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

    },
    watch: {
        '$route.params.emailId' (newEmailId) {
            emailService.getEmailById(newEmailId)
                .then(email => this.email = email)
        }
    }
}