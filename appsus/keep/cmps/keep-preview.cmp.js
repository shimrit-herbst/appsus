import noteTxt from './keep-txt.cmp.js'
import noteImg from './keep-img.cmp.js'
import noteTodos from './keep-todos.cmp.js'
// import keepVideo from './keep-video.cmp.js'


export default {
    name: 'keep-preview',
    props: ['note'],
    template: `
        <section class="keep-preview" :style="noteStyle">
        <component :is='note.type' :note="note"></component>    
            <div class="keep-edit-icons">
                <i title="Pin note" class="fa fas fa-thumbtack"></i>
                <i title="Send note to email" class="fa fas fa-envelope"></i>
                <i title="Change background color" class="fa fas fa-palette"></i>
                <i title="Edit note" @click="emitEdit" class="fa fas fa-edit"></i>
                <i title="Remove note" @click="emitRemove(note.id)" class="fa fas fa-trash-alt"></i>
            </div>
        </section>
    `,
    computed: {
        noteStyle() {
            return {
                backgroundColor: this.note.style.backgroundColor
            }
        }
    },
    methods: {
        emitRemove(noteId){
        this.$emit('remove', noteId);        
    },
        emitEdit(){
        this.$emit('edit');        
    },
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        // keepVideo
    }
}
