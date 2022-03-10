// let myLibrary = [];

// function Book (title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
// }

// function addBookToLibrary() {
// }

const btn = document.querySelector('#btnSubmit');
btn.addEventListener('click', () => {

    const titleInput = document.querySelector('#titleInput').value;
    const authorInput = document.querySelector('#authorInput').value;
    const pagesInput = document.querySelector('#pagesInput').value;

    console.log(`${titleInput}, ${authorInput}, ${pagesInput}`);
});