const myLibrary = [];

function Book( title , author , pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary( obj ) {
  myLibrary.push( obj );
}

function displayTable( array ){
    for( let i = 0; i < array.length ; i++ ){
        console.log( array[i].title);
        console.log(array[i].author);
        console.log(array[i].pages);
    }
}

let moby = new Book('Moby Dick', "Herman Melville", 624);
addBookToLibrary(moby);

displayTable( myLibrary);