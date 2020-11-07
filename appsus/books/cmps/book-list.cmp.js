import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
    <section class="book-list">
        <h2 class="list-header">books</h2>
        <h3 class="add-book" @click="openAddBook"><i class="fas fa-plus "></i> Add Book</h3>
        <ul>
            <li v-for="book in books" :key="book.id">
                <book-preview :book="book" @click.native="selected(book.id)"/>
            </li>
        </ul>
        
        
    </section>
    `,
    data() {
        return {}
    },
    methods: {
        openAddBook() {
            this.$router.push('/book/add')
        },
        selected(bookId) {
            this.$router.push('/book/' + bookId)
        },
    },
    components: {
        bookPreview,
    }
}