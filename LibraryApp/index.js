class Book {
  #title;
  #author;
  #publishYear;
  constructor(title, author, publishYear) {
    this.#title = title;
    this.#author = author;
    this.#publishYear = publishYear;
  }
  showBook() {
    return `Tytuł książki: ${this.#title}, Autor: ${this.#author}, Data wydania: ${this.#publishYear}`;
  }
}
class Library {
  #bookCollection;
  constructor() {
    this.#bookCollection = new Map();
    this.init();
  }
  init() {
    document.getElementById('addBook').addEventListener('click', () => this.addBook());
    document.getElementById('searchBook').addEventListener('click', () => this.searchBook());
  }
  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publishYear = document.getElementById('date').value;
    const book = new Book(title, author, publishYear);
    this.#bookCollection.set(title, book);
    alert('Książka została dodana do zbioru :)');
  }
  searchBook() {
    const title = document.getElementById('searchTitle').value;
    const book = this.#bookCollection.get(title);
    const result = document.getElementById('searchResult');
    if (book) {
      result.textContent = book.showBook();
    } else {
      result.textContent = 'Nie ma takiej książki w zbiorze';
    }
  }
}

const library = new Library();
