const form = document.querySelector('#libraryForm');
const bookNameInput = document.querySelector('#bookName');
const authorNameInput = document.querySelector('#bookAuthor');
const bookStatusInput = document.querySelector('#bookStatus');
const libraryTable = document.querySelector('#libraryTable');
const libraryTableBody = document.querySelector('#tableBody');

let bookName, bookAuthor, bookStatus;

const myLibrary = [];

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}

getBookInfo = () => {
    bookName = bookNameInput.value;
    bookAuthor = authorNameInput.value;
    bookStatus = bookStatusInput.value;
    const book = new Book(bookName, bookAuthor, bookStatus);
    addToLibrary(book);
}

addToLibrary = (item) => {
    myLibrary.push(item);
}

displayBook = () => {

    const lastItem = myLibrary.length - 1;

    const newRow = document.createElement('tr');
    
    const tableData1 = document.createElement('td');
    tableData1.textContent = `${myLibrary[lastItem].name}`;
    newRow.appendChild(tableData1);

    const tableData2 = document.createElement('td');
    tableData2.textContent = `${myLibrary[lastItem].author}`;
    newRow.appendChild(tableData2);

    const tableData3 = document.createElement('td');
    tableData3.textContent = `${myLibrary[lastItem].status}`;
    newRow.appendChild(tableData3);

    libraryTableBody.appendChild(newRow);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getBookInfo();

    displayBook();

})