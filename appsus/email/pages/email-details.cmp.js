import { appsusService } from '../../../js/services/appsus-service.js';
import { emailService } from '../services/email-service.js'




export default {
    name: 'email-details',
    template: `
    <section v-if="email" class="email-details">
            <div class="short-details">
                <h2>{{email.subject}}</h2>
                <span>{{email.from}}</span>
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
    components: {

    },
    created() {
        const emailId = this.$route.params.emailId
        if (emailId) {
            appsusService.getEmailById(emailId)
                .then(email => {
                    console.log(email);
                    this.email = email
                })
        }

    }
}