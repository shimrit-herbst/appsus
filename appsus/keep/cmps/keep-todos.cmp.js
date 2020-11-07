import { eventBus } from '../../../js/services/event-bus-service.js'

export default {
    props: ['note'],
    template: `
    <section class="keep-todos">
        <h3>{{noteInfo.title}}</h3>
        <ul>
            <li v-for="(todo, todoIdx) in noteInfo.todos">
                <label :class="checkboxClass(todo)" >
                    <input type="checkbox" v-model="todo.isDone" @change="checkboxClicked(todo, todoIdx)"/>    
                    {{todo.txt}}
                </label>
                <label class="done-at">{{doneAtToDisplay(todo)}}</label>
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
        doneAtToDisplay(todo) {
            if (todo.isDone)
                return new Date(todo.doneAt).toLocaleTimeString();
        },
        checkboxClass(todo) {
            return { done: todo.isDone }
        },
        checkboxClicked(todo, todoIdx) {
            if (todo.isDone) todo.doneAt = new Date();
            else todo.doneAt = null;
            eventBus.$emit('save', this.note);
        },
    },
}
