// Click handler for search button
const captureSearchValue = () => {
    let searchValue;
    searchValue = document.getElementById("search-bar").value;
    return searchValue;
};

// Filter books based on search input and render filtered books to the DOM
const filterBooks = (searchInput, listOfBooks) => {
    //Flatten all the books data
    let flattenBooks = flattenObjectValuesIntoArray(listOfBooks);

    let searchMatch = [];
    //Match search input with 
    for (let i = 0; i < flattenBooks.length; i++) {
        for (let j = 0; j < flattenBooks[i].length; j++) {
            if (searchInput === flattenBooks[i][j]) {
                searchMatch.push(i);
            }            
        }
    };

    let booksMatch = [];
    for (let k = 0; k < searchMatch.length; k++) {
        booksMatch.push(books[searchMatch[k]]);
    }

    return booksMatch;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (targetBookList) => {
    let formattedBookAsDiv = [];

    for (let i = 0; i < targetBookList.length; i++) {
        formattedBookAsDiv.push(structureBookAsHtml(targetBookList[i]));
    }

    //return list of books formatted as HTML using the function
    return formattedBookAsDiv;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (bookList) => {
    let searchValue = captureSearchValue();
    let foundBooks = filterBooks(searchValue, bookList);
    let htmlBooks = structureBooksAsHtml(foundBooks);
    renderBooksToDom(htmlBooks);
}

// Grab search button from the DOM
let searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });