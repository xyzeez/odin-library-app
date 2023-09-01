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

    const book = new Book(bookName, bookAuthor, bookStatus)

    myLibrary.push(book)
}

addToLibrary = () => {
    myLibrary.forEach(book => {
    
        const newRow = document.createElement('tr');
    
        const tableData1 = document.createElement('td');
        tableData1.textContent = `${book.name}`;
        newRow.appendChild(tableData1);
    
        const tableData2 = document.createElement('td');
        tableData2.textContent = `${book.author}`;
        newRow.appendChild(tableData2);
    
        const tableData3 = document.createElement('td');
        tableData3.textContent = `${book.status}`;
        newRow.appendChild(tableData3);
    
        libraryTableBody.appendChild(newRow);
    
    })
}

clearLibrary = () => {
    myLibrary.length = 0;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getBookInfo();

    addToLibrary();

    clearLibrary();
})