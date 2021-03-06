import noteTxt from './keep-txt.cmp.js'
import noteImg from './keep-img.cmp.js'
import noteTodos from './keep-todos.cmp.js'
// import noteVideo from './keep-video.cmp.js'


export default {
    name: 'keep-preview',
    props: ['note'],
    template: `
        <section class="keep-preview" :style="noteStyle">
        <component :is='note.type' :note="note" :isEditable="isEditable"></component>    
            <div class="keep-edit-icons">
                <!-- <i title="Pin note" class="fa fas fa-thumbtack"></i> -->
                <!-- <i title="Send note to email" class="fa fas fa-envelope"></i> -->
                <label><i title="Change background color" class="fa fas fa-palette"><input type="color" class="color-input" v-model="note.style.backgroundColor" @change="onChangeColorClick">
                </i></label>
                <i title="Remove note" @click="emitRemove" class="fa fas fa-trash-alt"></i>
                <i title="Save note" @click="onSaveClick" v-if="isEditable && note.type !== 'noteImg'" class="fa fas fa-save"></i> 
                <i title="Edit note" @click="onEditClick" v-if="!isEditable && note.type !== 'noteImg'" class="fa fas fa-edit"></i> 
                <!-- <router-link :to="'/keep/edit/' + note.id"><i title="Edit note" class="fa fas fa-edit"></i></router-link> -->
            </div>
        </section>
    `,

    data() {
        return {
            isEditable: false
        }
    },
    computed: {
        noteStyle() {
            return {
                backgroundColor: this.note.style.backgroundColor
            }
        },
    },
    methods: {
        emitRemove() {
            this.$emit('remove', this.note.id);
        },
        onEditClick() {
            this.isEditable = true;
        },
        onSaveClick() {
            this.isEditable = false;
            this.$emit('save', this.note);
        },
        onChangeColorClick() {
            this.$emit('save', this.note);
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        // noteVideo
    }
}
