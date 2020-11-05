export default {
    template: `
    <section class="keep-search">
        <h3>Notes</h3>
        <label>Search by note title:</label>
        <input type="text" class="note-search" v-model="byTitle" placeholder="Search here..." @input="emitFilter">
        <label>Search by type of note:</label>
        <select v-model="byType" @change="emitFilter">
            <option></option>         
            <option>Text</option>
            <option>Image</option>
            <option>List</option>
        </select>
    </section>
    `,
    data(){
        return{
            byTitle:'',
            byType:'',
        }
    },
    methods: {
        emitFilter(){
            console.log(this.byType)
            this.$emit('filtered', this.filterBy)
        }
    },
    computed:{
        byTypeInService(){
            switch (this.byType){
                case 'Text': return 'noteTxt';
                case 'Image': return 'noteImg';
                case 'List': return 'noteTodos';
                default : return ''; 
            }
        },
        filterBy(){
            return{
                byTitle: this.byTitle,
                byType: this.byTypeInService,
            }  
        }
    }
}
