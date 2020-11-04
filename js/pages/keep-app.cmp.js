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
<<<<<<< HEAD
}
=======
}
>>>>>>> 69bac8bdf1f4d8f3fc8ff66d0c4c2c9fd2bb2127
