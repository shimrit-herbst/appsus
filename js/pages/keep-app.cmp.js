import { keepService } from '../../appsus/keep/services/keep-service.js';
import keepList from '../../appsus/keep/cmps/keep-list.cmp.js';
import keepSearch from '../../appsus/keep/cmps/keep-search.cmp.js'
import keepAdd from  '../../appsus/keep/cmps/keep-add.cmp.js'

export default {
    name: 'miss-keep',
    template: `
        <section class="miss-keep">
        <header>
            <keep-search /> 
            <!-- TO DO search by - filter -->
        </header>
            <keep-add />
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
        keepService.getNotes()
            .then(notes => this.notes = notes)
    },
    components: {
        keepList,
        keepSearch,
        keepAdd
    }
}
