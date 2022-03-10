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

function displayLibrary(myLibrary) {
    //clear out existing table
    const removeRows = document.querySelector('.bookTable');
    removeRows.innerHTML = "";
    
    //write the table
    for (i = 0; i < myLibrary.length; i++) {
        const bookTable= document.querySelector('.bookTable');
        let row = bookTable.insertRow(i);
        row.dataset.indexNumber = i;

        let cellZero = row.insertCell(0);
        let cellOne = row.insertCell(1);
        let cellTwo = row.insertCell(2);
        let cellThree = row.insertCell(3);
        let cellFour = row.insertCell(4);

        cellZero.innerHTML = myLibrary[i].title;
        cellOne.innerHTML = myLibrary[i].author;
        cellTwo.innerHTML = myLibrary[i].pages;
        cellThree.innerHTML = myLibrary[i].readStatus;
    }
}

const btn = document.querySelector('#btnSubmit');
btn.addEventListener('click', () => {
    addBookToLibrary();
    displayLibrary(myLibrary);
});


