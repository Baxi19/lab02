import { Author } from './author';

export class Book {
    private title: string;
    private author: Author;
    private rating: number;

    constructor(newTitle: string, newAuthor: Author, newRating: number) {
        if (newAuthor === null) {
            throw new Error('El autor no puede ser nulo');
        }
        this.title = newTitle;
        this.author = newAuthor;
        this.rating = newRating;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getAuthor(): Author {
        return this.author;
    }

    public setAuthor(author: Author): void {
        this.author = author;
    }

    public getRating(): number {
        return this.rating;
    }

    /**
     * Change book's rating. We only accept rating values between 0 and 5.
     * @param rating is the new rating value
     */
    public setRating(newRating: number): void {
        if (newRating > 5) {
            this.rating = 5;
        } else if (newRating < 0) {
            this.rating = 0;
        } else {
            this.rating = newRating;
        }
    }

    public equals(other: Book): boolean {
        return other != null && this.title === other.getTitle() && this.author.equals(other.getAuthor().getName());
    }

    public titleContains(target: string): boolean {
        return this.title.toLowerCase().indexOf(target.toLowerCase()) != -1;
    }

    public authorContains(target: string): boolean {
        return this.author.getName().toLowerCase().indexOf(target.toLowerCase()) != -1;
    }
}