import { keepService } from '../services/keep-service.js';
import keepPreview from './keep-preview.cmp.js';

export default {
    name: 'keep-list',
    props: ['notes'],
    template: `
        <section class="keep-list">
            <ul>
                <li v-for="note in notes" :key="note.id" >
                    <keep-preview :note="note" @delete="deleteNote(note.id)" @changeBgcColor="changeBgcColor"/>
                </li>
            </ul>
        </section>
    `,
    methods: {
        deleteNote(id) {
            keepService.deleteNote(id);
        },
        changeBgcColor(color, id) {
            keepService.getNoteById(id)
                .then(note => {
                    note.style.backgroundcolor = color;
                    keepService.saveNote(note)
                });
        },
    },
    components: {
        keepPreview
    }
}
