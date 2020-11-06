import { keepService } from '../services/keep-service.js';
import keepPreview from './keep-preview.cmp.js';

export default {
    name: 'keep-list',
    props: ['notes'],
    template: `
        <section class="keep-list">
            <ul>
                <li v-for="note in notes" :key="note.id">
                    <keep-preview :note="note" :class="BgColor" @save="saveNote(note)" @remove="removeNote(note.id)" />
                    <!-- @changeBgColor="changeBgcColor"     -->
                </li>
            </ul>
        </section>
    `,
    methods: {
        removeNote(noteId) {
            keepService.removeNote(noteId)
                .then(()=> this.$emit('show-msg', 'Note was removed successfully!'))
        },
        saveNote(note) {
            keepService.saveNote(note)
        }
        // changeBgColor(color, noteId) {
        //     keepService.getNoteById(noteId)
        //         .then(note => {
        //             note.style.backgroundcolor = color;
        //             keepService.saveNote(note)
        //         });
        // },
    },
    computed: {
        BgColor() {
        }
    },
    components: {
        keepPreview,
    }
}
