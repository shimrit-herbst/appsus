export default {
    name: 'keep-txt',
    props: ['note', 'isEditable'],
    template: `
    <section class="keep-txt">
        <div v-if="isEditable">
            <input type="text" v-model="note.info.txt"/>
        </div>
        <div v-else>
            <h3>{{note.info.title}}</h3>
            <p>{{note.info.txt}}</p>
        </div>
    </section>
    `,
}
