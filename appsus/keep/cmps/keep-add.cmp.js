import { keepService } from '../services/keep-service.js';

export default {
    name: 'keep-add',
    template: `
    <section class="keep-add" v-if="note">
        <form @submit.prevent="saveNote">
            <input type="text" :placeholder="textToShow" v-model="input" />
            <div class="icons">
                <i class="fas fa-font" @click="setNoteType('noteTxt')"></i> 
                <i class="far fa-image" @click="setNoteType('noteImg')"></i>
                <i class="fas fa-tasks" @click="setNoteType('noteTodos')"></i>
            <!-- <i class="fas fa-thumbtack"></i>
            <i class="fas fa-check"></i>
            <i class="fas fa-palette"></i>
            <i class="fas fa-trash-alt"></i> -->
            </div>
            <button >Save</button>
        </form>
    </section>`,
    data() {
        return {
            note: keepService.getEmptyTextNote(),
            input: '',
        }
    },
    methods: {
        getPropertyName() {
            switch (this.note.type) {
                case 'noteTxt':
                    return 'txt';
                case 'noteImg':
                    return 'url';
                case 'noteTodos':
                    return 'items';
            }
        },
        saveNote() {
            const propertyName = this.getPropertyName();
            this.note.info[propertyName] = this.input;
            keepService.saveNote(this.note);
            this.note = keepService.getEmptyTextNote();
            this.input = '';
        },
        setNoteType(noteType) {
            this.note.type = noteType;

        },
    },
    computed: {
        textToShow() {
            switch (this.note.type) {
                case 'noteTxt':
                    return 'Take a note...'
                case 'noteImg':
                    return 'Enter image URL...'
                case 'noteTodos':
                    return 'Enter comma seperated list...'
            }
        }
    },
}