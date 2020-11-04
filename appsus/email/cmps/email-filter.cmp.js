export default {
    props: ['unreadMail'],
    template: `
    <section class="email-filter">
        <button @click="onFilterMails(inbox)"><pre>Inbox    ({{unreadMail}})</pre></button>
        <button @click="onFilterMails(sent)">Sent</button>
        <button @click="onFilterMails(all)">All</button>
    </section>
    `,
    data() {
        return {}
    },
    methods: {
        onFilterMails() {
            // log(filter)
            // this.$emit(filterMails(filter))
        }
    }
}