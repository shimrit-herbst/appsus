
export default {
    props: ['note'],
    template: `
    <section class="keep-todos">
        <h3>{{noteInfo.title}}</h3>
        <ul>
            <li v-for="todo in noteInfo.todos">
            <input type="checkbox" v-model="todo.isDone"/>    
            {{todo.txt}}
            {{todo.doneAt}}
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            noteInfo: this.note.info
        }
    },
}