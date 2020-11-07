import { keepService } from '../services/keep-service.js';
import { eventBus } from '../../../js/services/event-bus-service.js'
import keepPreview from './keep-preview.cmp.js';


export default {
    name: 'keep-list',
    props: ['notes'],
    template: `
        <section class="keep-list">
            <ul>
                <li v-for="note in notes" :key="note.id">
                    <keep-preview :note="note" @save="saveNote(note)" @remove="removeNote(note.id)" />
                </li>
            </ul>
        </section>
    `,
    methods: {
        removeNote(noteId) {
            keepService.removeNote(noteId)
                .then(() => this.$emit('show-msg', 'Note was removed successfully!'))
        },
        saveNote(note) {
            keepService.saveNote(note)
        },
    },
    created() {
        eventBus.$on('save', (note) => this.saveNote(note))
    },
    components: {
        keepPreview,
    }
}
