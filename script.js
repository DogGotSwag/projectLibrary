const myLibrary = [];


class Book {
    constructor( title , author , pages ,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
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

        let read = document.createElement('div');
        read.innerText = array[i].read == true ? 'read': "unread" ;
        read.className = 'read';

        let haveReadButton = document.createElement('button');
        haveReadButton.innerText = 'Change';

        haveReadButton.addEventListener('click', () => {

            let index = removeButton.classList[1].split('_')[1];
            myLibrary[index].read = array[i].read == true ? false: true ;
            displayTable(myLibrary);
        });

        read.appendChild(haveReadButton);

        newRow.appendChild(removeButton);

        newRow.appendChild(title);
        newRow.appendChild(author);
        newRow.appendChild(pages);
        newRow.appendChild(read)
        

        let frag = new DocumentFragment();
        frag.appendChild(newRow);

        tableBody.appendChild(frag);


        removeButton.addEventListener('click', ( event )=>{
            let thisRow = event.target.parentNode;
            tableBody.removeChild( thisRow );

            let index = removeButton.classList[1].split('_')[1];
            removeBook( index );
        });

    }
}

let moby = new Book('Moby Dick', "Herman Melville", 624, true );
addBookToLibrary(moby);

displayTable( myLibrary);

let button = document.querySelector('.addButton');

let titleInput = document.querySelector('#bookTitle');
let authorInput = document.querySelector('#bookAuthor');
let pagesInput = document.querySelector('#bookPages');
let readInput = document.querySelector('#bookRead');

button.addEventListener('click', () =>{
    
    
    let obj = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';

    addBookToLibrary(obj);

    displayTable(myLibrary);
    console.log( myLibrary);
});



function removeBook( index){
    myLibrary.splice( index, 1);
}

