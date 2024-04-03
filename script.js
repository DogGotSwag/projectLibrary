const myLibrary = [];

let currentBooks = 0;

function Book( title , author , pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.index = currentBooks;
}

function addBookToLibrary( obj ) {
  myLibrary.push( obj );
}

let tableBody = document.querySelector('tbody');

function displayTable( array, index = 0 ){
    for( let i = index; i < array.length ; i++ ){
        let newRow = document.createElement('tr');
        newRow.className = 'row';

        let title = document.createElement('th');
        title.innerText = array[i].title;

        let author = document.createElement('td');
        author.setAttribute('colspan', '2');
        author.innerText = array[i].author;

        let pages = document.createElement('td');
        pages.innerText = array[i].pages;

        newRow.appendChild(title);
        newRow.appendChild(author);
        newRow.appendChild(pages);
        

        let frag = new DocumentFragment();
        frag.appendChild(newRow);

        tableBody.appendChild(frag);

    }
}

let moby = new Book('Moby Dick', "Herman Melville", 624);
addBookToLibrary(moby);

displayTable( myLibrary);

let button = document.querySelector('button');

let titleInput = document.querySelector('#bookTitle');
let authorInput = document.querySelector('#bookAuthor');
let pagesInput = document.querySelector('#bookPages');

button.addEventListener('click', () =>{
    console.log(titleInput.value);
    console.log(authorInput.value);
    console.log(pagesInput.value);
    
    let obj = new Book(titleInput.value, authorInput.value, pagesInput.value);
    currentBooks++;

    addBookToLibrary(obj);

    displayTable(myLibrary, currentBooks);
});