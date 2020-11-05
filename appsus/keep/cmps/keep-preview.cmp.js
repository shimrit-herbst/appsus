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
        </section>
    `,
    computed: {
        noteStyle() {
            console.log(this.note);
            return {
                backgroundColor: this.note.style.backgroundColor
            }
        }
    },
    components: {
        keepTxt,
        keepImg,
        keepTodos,
        // keepVideo
    }
}


// :class="previewClass"