import keepTxt from './keep-txt.cmp.js'
import keepImg from './keep-img.cmp.js'
import keepTodos from './keep-todos.cmp.js'
// import keepVideo from './keep-video.cmp.js'


export default {
    name: 'keep-preview',
    props: ['note'],
    template: `
        <section class="keep-preview" :style="noteStyle">
           <keep-txt :note="note" v-if="note.type === 'noteTxt'" />
           <keep-img :note="note" v-if="note.type === 'noteImg'" />
           <keep-todos :note="note" v-if="note.type === 'noteTodos'" />
           <!-- <keep-video :note="note" v-if="note.type === 'noteVideo'" /> -->
           <div class="keep-edit-icons">
                <i class="fa fas fa-thumbtack"></i>
                <i class="fa fas fa-check"></i>
                <i class="fa fas fa-palette"></i>
                <i @click="emitRemove(note.id)" class="fa fas fa-trash-alt"></i>
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
    },
    components: {
        keepTxt,
        keepImg,
        keepTodos,
        // keepVideo
    }
}


// :class="previewClass"