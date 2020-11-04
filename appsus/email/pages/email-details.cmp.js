import { appsusService } from "../../../js/services/appsus-service.js";





export default {
    name: 'email-details',
    template: `
    <section v-if="email" class="email-details">
            <div class="short-details">
                <h2>{{email.subject}}</h2>
                <h3>hello</h3> 
            </div>
    </section>

    `,
    data() {
        return {
            email: null,
        }
    },
    computed: {

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