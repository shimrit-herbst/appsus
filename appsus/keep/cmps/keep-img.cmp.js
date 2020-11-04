
export default {
    props: ['note'],
    template: `
    <section class="keep-img">
        <h3>{{note.info.title}}</h3>
        <img :src="note.info.url">
    </section>
    `,
}