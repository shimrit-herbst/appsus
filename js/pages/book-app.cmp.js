import { bookService } from '../../appsus/books/services/book-service.js'
import bookList from '../../appsus/books/cmps/book-list.cmp.js'
import bookFilter from '../../appsus/books/cmps/book-filter.cmp.js'
import bookDetails from '../../appsus/books/pages/book-details.cmp.js'
import bookAdd from '../../appsus/books/pages/book-add.cmp.js'

export default {
    name: 'book-app',
    template: `
    <section class="book-app">
        <book-filter v-if="isShowList" @doFilter="setFilter" class="container"/>
        <book-list class="book-list-container container" v-if="isShowList" :books="booksToShow" @onShowDetails="showDetails"  />
        <book-details v-else="isShowList" :book="getBookById" @closeDetails="closeDetails"/>
    </section>
    `,
    components: {
        bookList,
        bookFilter,
        bookDetails,
        bookAdd
    },
    data() {
        return {
            books: null,
            showBookId: null,
            isShowList: true,
            filterBy: null

        }
    },
    methods: {
        showDetails(bookId) {
            this.showBookId = bookId;
            this.isShowList = false;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        closeDetails() {
            console.log('closing');
            this.isShowList = true;
        }
    },
    computed: {
        getBookById() {
            return this.books.filter(book => book.id === this.showBookId)[0]
        },
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.title.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt) &&
                (
                    book.listPrice.amount < this.filterBy.maxPrice &&
                    book.listPrice.amount > this.filterBy.minPrice
                )
            )
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    }





}