import { bookService } from '../services/book-service.js'
import bookPreview from '../cmps/book-preview.cmp.js'


export default {
    name: 'book-add',
    template: `
    <section class="book-add container">
        <div class="add-book-header">
            <div class="back-page">
            <i @click="onBackPage" class="fas fa-arrow-alt-circle-left"><span> Go Back</span></i> 
            </div> 
            <h2>Add Books</h2> 
        </div>
        <input class="book-add-search" type="text" v-model="bookSearch" placeholder="Search a Book to add" @input="emitSearch"/>
        <hr/>
        <div class="book-list-container">
            <ul>
                <li v-for="book in showBooks" :key="book.id">
                    <book-preview :book="book" @click.native="onAddBook(book.id)"/>
                </li>
            </ul> 
        </div>
        
    </section>
    `,
    data() {
        return {
            bookSearch: '',
            searchRes: '',
            showBooks: null,
        }
    },
    components: {
        bookPreview,
    },
    methods: {
        onBackPage() {
            this.$router.push('/book')
        },
        emitSearch() {
            bookService.getBooksFromGoogle(this.bookSearch)
                .then(res => this.showBooks = res)
        },
        onAddBook(bookId) {
            console.log('adding ', bookId);
            const currBook = this.showBooks.find(book => book.id === bookId)
            bookService.addBook(currBook)
                // .then(eventBus.$emit('show-msg-add', { msg: 'book added successfully', bookId: this.book.id }))
        },
    },
    created() {
        bookService.getBooksFromGoogle()
            .then(res => this.showBooks = res)
    }
}