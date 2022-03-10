let myLibrary = [];

function Book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus= readStatus;
}

function addBookToLibrary() {
    // obtain user input from form
    const titleInput = document.querySelector('#titleInput').value;
    const authorInput = document.querySelector('#authorInput').value;
    const pagesInput = document.querySelector('#pagesInput').value;
    const readStatusInput = document.querySelector('input[name=readStatus]:checked').value;

    //create new book object with form information
    const newBook = new Book(titleInput, authorInput, pagesInput, readStatusInput);
    console.table(newBook);

    //feed the book object into array
    myLibrary.push(newBook);
}

function removeLibraryDisplay() {

}

function displayLibrary(myLibrary){
    for (i = 0; i < myLibrary.length; i++) {
        //console.log(`${myLibrary[i].title}, ${myLibrary[i].author}, ${myLibrary[i].pages}, ${myLibrary[i].readStatus}`);

        //add to table
    }
}

const btn = document.querySelector('#btnSubmit');
btn.addEventListener('click', () => {
    addBookToLibrary();
});