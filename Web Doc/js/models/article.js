export class Article{
    constructor(id, title, author, date, sections=[]) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
        this.sections = sections;
    }

    render() {
        return `
            <div class="article" id="article-${this.id}">
                <h2>${this.title}</h2>
                <p><strong>Author:</strong> ${this.author}</p>
                <p><strong>Date:</strong> ${this.date}</p>
            </div>
        `;
    }
}