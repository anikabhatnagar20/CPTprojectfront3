---
comments: True
layout: base
title: Book Search
description: This is the page allows the user to search for books that they might be interested in reading 
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /booksearch
---

# Book Search
Looking for a book? Search for it here!

<body>
<!-- Input box for book search -->
<div>
    <input type="text" id="bookInput" placeholder="Enter a book title">
    <button onclick="searchBook()">Search</button>
</div>

<!-- Display book search results here -->
<div id="bookResults">
    <!-- book search results will be displayed here -->
</div>

<script>
    // Function to search for books using the from books-API from rapid api 
    function searchBook() {
        // Get user input
        const bookInput = document.getElementById("bookInput");
        const query = bookInput.value;

        // Replace 'YOUR_OMDB_API_KEY' with your actual OMDB API key
        const apiKey = '98e9c1c32cmshc10b08ee95bbbbep1717bfjsn1825f318a1b5';
        const apiUrl = `books-api7.p.rapidapi.com`;

        // Clear previous results
        const bookResults = document.getElementById("bookResults");
        bookResults.innerHTML = '';

        // Fetch data from the OMDB API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Process and display book data
                if (data.Response === "True" && data.Search) {
                    data.Search.forEach(book => {
                        const bookElement = document.createElement("div");
                        bookElement.classList.add("book-card"); // Add CSS class for styling
                        // Create and append elements like book title, poster, year, etc.
                        bookElement.innerHTML = `<h3>${book.Title}</h3><img src="${book.Poster}" alt="${book.Title}"><p>Year: ${book.Year}</p>`;
                        bookResults.appendChild(bookElement);
                    });
                } else {
                    // Handle error or no results
                    bookResults.innerHTML = 'No book found or an error occurred.';
                }
            })
            .catch(error => {
                console.error(error);
                bookResults.innerHTML = 'An error occurred while fetching data.';
            });
    }
</script>
</body>