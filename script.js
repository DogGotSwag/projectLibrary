const myLibrary = [];


function Book( title , author , pages , index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.index = index;
}

function addBookToLibrary( obj ) {
  myLibrary.push( obj );
}

let tableBody = document.querySelector('.tableBody');

function displayTable( array ){
    let childrenArray = Array.from(tableBody.childNodes);
    console.log();
    for( let i = 0; i < childrenArray.length; i++){
        tableBody.removeChild(childrenArray[i]);

    }

    for( let i = 0; i < array.length ; i++ ){

        let removeButton = document.createElement('button');
        removeButton.innerText = '✖';
        removeButton.className = `remove book_${i}`;

        let newRow = document.createElement('div');
        newRow.className = 'row';

        let title = document.createElement('div');
        title.className = 'title';
        title.innerText = array[i].title;

        let author = document.createElement('div');
        author.innerText = array[i].author;
        author.className = 'author'

        let pages = document.createElement('div');
        pages.innerText = array[i].pages;

        newRow.appendChild(removeButton);

        newRow.appendChild(title);
        newRow.appendChild(author);
        newRow.appendChild(pages);
        

        let frag = new DocumentFragment();
        frag.appendChild(newRow);

        tableBody.appendChild(frag);

    }
}

let moby = new Book('Moby Dick', "Herman Melville", 624, myLibrary.length );
addBookToLibrary(moby);

displayTable( myLibrary);

let button = document.querySelector('.addButton');

let titleInput = document.querySelector('#bookTitle');
let authorInput = document.querySelector('#bookAuthor');
let pagesInput = document.querySelector('#bookPages');

button.addEventListener('click', () =>{
    
    
    let obj = new Book(titleInput.value, authorInput.value, pagesInput.value);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';

    addBookToLibrary(obj);

    displayTable(myLibrary);
});