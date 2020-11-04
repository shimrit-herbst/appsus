import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
    <section class="email-list">
        <h2>email list</h2>
        <ul class="email-list-container">
            <li v-for="email in emails" :key="email.id">
                <email-preview :email="email" @click.native ="selected(email.id)"/>
            </li>
        </ul>
        
    </section>
    `,
    components: {
        emailPreview,
    },
    methods: {
        selected(emailId) {
            this.$router.push('/email/' + emailId)
        }
    }
}