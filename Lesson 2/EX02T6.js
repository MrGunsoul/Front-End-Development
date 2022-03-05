
/*
function Book(isbn, name, authors, publicationDate) {
  this.isbn = isbn;
  this.name = name;
  this.authors = authors;
  this.publicationDate = publicationDate;
}

const myBook = new Book("978-0-13-601970-1","Book of myBook", "Nico M. Kranni", "8.2.2022")
*/

const book={
  isbn:"978-0-13-601970-2", 
  name:"Book of Nico", 
  authors:"Nico M. Kranni", 
  publicationDate:"8.2.2022",
  getAuthors : function() {
    return this.authors;
  },
  setAuthors : function() {
    book.authors = "Steve"
  },
  getIsbn:function(){
    return this.isbn;
  },
  setIsbn:function(){
    book.isbn="978-0-13-601970-9"
  },
}

const book1=Object.create(book);
const book2=Object.create(book);
console.log(book1.name)

console.log(book1 == book2);
console.log(book1 === book2);