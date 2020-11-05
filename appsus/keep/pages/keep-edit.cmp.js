import { keepService } from '../services/keep-service.js'

export default {
    name: 'keep-details',
    template: `
    <section v-if="note" class="keep-details">
            <div class="details">
                <h2>{{note.title}}</h2>
                <span>{{note.info.txt}}</span>
                <button @click="onSave">Save changes</button>
            </div>
        </section>

    `,
    data() {
        return {
            note: null,
        }
    },
    computed: {
      
    },
    methods: {
        onSave() {
            console.log('save changes');
        }
    },
    created() {
        const noteId = this.$route.params.keepId
        console.log(noteId)
        if (noteId) {
            keepService.getNoteById(noteId)
                .then(note => {
                    this.note = note
                })
        }
    }
}

