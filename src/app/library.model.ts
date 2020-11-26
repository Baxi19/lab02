import { Book } from './book.model';

export class Library {
    private books: Array<Book>;
    constructor() {
        this.books = new Array<Book>();
    }
    
    public union(other: Library): Library {
        let uLib = new Library();
        uLib.addBooks(this.books);

        let otherBooks = other.getBooks();

        for (var i = 0; i < otherBooks.length; i++) {
            uLib.addBook(otherBooks[i]);
        }

        return uLib;
    }

    //TODO modify to use ArrayBookList
    public size(): number {
        return this.books.length;
    }

    public getBooks(): Array<Book> {
        let copy: Array<Book> = new Array<Book>();
        for (var i = 0; i < this.size(); i++) {
            copy.push(this.books[i]);
        }
        return copy;
    }

    //TODO modify to use ArrayBookList
    public addBook(addMe: Book): void {
        this.books.push(addMe);
    }

    public addBooks(addUs: Array<Book>): void {
        for (var i = 0; i < addUs.length; i++) {
            this.addBook(addUs[i]);
        }
    }

    //TODO modify to use ArrayBookList
    public contains(findMe: Book): boolean {
        for (var i = 0; i < this.size(); i++) {
            if (this.books[i] === findMe || (this.books[i] != null && this.books[i].equals(findMe))) {
                return true;
            }
        }
        return false;
    }

    //TODO modify to use ArrayBookList
    public searchByTitle(title: string): Library {
        let selection = new Library();

        for (var i = 0; i < this.size(); i++) {
            if (this.books[i].titleContains(title)) {
                selection.addBook(this.books[i]);
            }
        }

        return selection;
    }

    //TODO modify to use ArrayBookList
    public searchByAuthor(author: string): Library {

        let selection = new Library();

        for (var i = 0; i < this.size(); i++) {
            if (this.books[i].authorContains(author)) {
                selection.addBook(this.books[i]);
            }
        }

        return selection;
    }

    /**
     * Find all books with an equal or greater rating.
     * TODO modify to use ArrayBookList
     * 
     * @param rating
     * @return array of all books with an equal or better rating
     */
    public searchByRating(rating: number): Library {
        let selection: Library = new Library();

        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getRating() >= rating) {
                selection.addBook(this.books[i]);
            }
        }

        return selection;
    }

    //TODO modify to use ArrayBookList
    public toString(): string {
        return this.books.toString();
    }
}


