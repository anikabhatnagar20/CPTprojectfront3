// favorites.js

document.addEventListener('DOMContentLoaded', function () {
    const addFavoriteBtn = document.getElementById('addFavoriteBtn');
    addFavoriteBtn.addEventListener('click', addFavorite);

    function addFavorite() {
        const bookInput = document.getElementById('bookInput').value;

        // Validate if the input is not empty
        if (!bookInput.trim()) {
            alert('Please enter a book title.');
            return;
        }

        // Assuming you have a function to add the book to the favorites table
        addToFavoritesTable(bookInput);

        // Clear the input field after adding to favorites
        document.getElementById('bookInput').value = '';
    }

    function addToFavoritesTable(bookTitle) {
        // Assuming you have logic to add the book to the table
        // For now, let's just create a new row with the title
        const favoritesTable = document.getElementById('favoritesTable');
        const newRow = favoritesTable.insertRow();
        const cell = newRow.insertCell(0);
        cell.innerHTML = bookTitle;
    }
});
