
export default {
    props: ['note'],
    template: `
    <section class="keep-todos">
        <h3>{{noteInfo.title}}</h3>
        <ul>
            <li v-for="todo in noteInfo.todos">
                <label :class="checkboxClass(todo)">
                    <input type="checkbox" v-model="todo.isDone"/>    
                    {{todo.txt}}
                    {{todo.doneAt}}
                </label>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            noteInfo: this.note.info,
        }
    },
    methods: {
        checkboxClass(todo) {
            return {done: todo.isDone}
        },
    },
}