// favorites.js
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

            // Send an AJAX request to add the favorite to the database
            fetch('/api/add_favorite', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: bookTitle }),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to add favorite');
                }
            })
            .then(data => {
                console.log(data.message); // Log the success message
            })
            .catch(error => {
                console.error(error.message); // Log the error message
            });
        }
    });
});
