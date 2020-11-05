import { keepService } from '../../appsus/keep/services/keep-service.js';
import keepList from '../../appsus/keep/cmps/keep-list.cmp.js';


export default {
    name: 'miss-keep',
    template: `
        <section class="miss-keep">
            <keep-list :notes="notesToShow"/>
        </section>
`,
    data() {
        return {
            notes: null,
        }
    },
    computed: {
        notesToShow() {
            return this.notes;
        }
    },
    created() {
        this.notes = keepService.getNotes();
    },
    components: {
        keepList,
    }
}