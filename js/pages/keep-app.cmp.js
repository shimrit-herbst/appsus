import { keepService } from '../../appsus/keep/services/keep-service.js';
import keepList from '../../appsus/keep/cmps/keep-list.cmp.js';
import keepSearch from '../../appsus/keep/cmps/keep-search.cmp.js'
import keepAdd from '../../appsus/keep/cmps/keep-add.cmp.js'

export default {
    name: 'miss-keep',
    template: `
        <section class="miss-keep">
            <div class="top-sections">
                <keep-search @filtered="setFilter"/> 
                <keep-add />
            </div>
            <keep-list :notes="notesToShow"/>
        </section>
`,
    data() {
        return {
            notes: null,
            filterBy: null,
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const titleFilter = this.filterBy.byTitle.toLowerCase();
            const BodyFilter = this.filterBy.byBody.toLowerCase();
            const filteredByTitleOrBody = this.notes.filter(note => {
                return (
                    note.info.title.toLowerCase().includes(titleFilter) ||
                    note.info.txt.toLowerCase().includes(BodyFilter)
                )
            })
            const typeFilter = this.filterBy.byType;
            if (typeFilter === '') return filteredByTitleOrBody;
            const filteredByTitleAndType = filteredByTitleOrBody.filter(note => {
                return (
                    note.type === typeFilter
                )
            })
            return filteredByTitleAndType;
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
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
