document.addEventListener("DOMContentLoaded", function() {
    const bookInput = document.getElementById('bookInput');
    const favoritesTable = document.getElementById('favoritesTable');

    document.getElementById('addFavoriteBtn').addEventListener('click', function() {
        const bookTitle = bookInput.value.trim();

        if (bookTitle !== "") {
            const newRow = favoritesTable.insertRow();
            newRow.insertCell(0).innerText = bookTitle;
            // Clear the input field
            bookInput.value = "";
        }
    });
});
