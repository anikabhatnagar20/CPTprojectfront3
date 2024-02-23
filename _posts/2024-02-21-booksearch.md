---
layout: base
title: Book Search
description: This is the page allows the user to search for books that they might be interested in reading
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /booksearch
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body, input, button, div, h3, p, a, h1 { /* Include h1 in the selector list */
            font-family: 'Times New Roman', Times, serif;
        }
        body {
            margin: 50px;
        }
        .container {
            display: flex;
            align-items: center;
        }
        .book-search {
            margin-left: 20px;
        }
        .book-card {
            border: 1px solid #ddd; /* Adds a light border to each book card for visual separation */
            margin-bottom: 20px; /* Adds space between book cards */
            padding: 10px; /* Adds some padding inside each book card */
        }
        .book-card img {
            max-width: 100px; /* Limits image size to keep the layout tidy */
            height: auto; /* Keeps the image aspect ratio */
        }
    </style>
</head>
<body>
    <h1>Search through and find a book perfect for you!</h1> 
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
        async function searchBook() {
            const bookInput = document.getElementById("bookInput").value.trim();
            if (bookInput === "") {
                alert("Please enter a book title.");
                return;
            }
            const url = `https://books-api7.p.rapidapi.com/books/find/title?title=${encodeURIComponent(bookInput)}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '98e9c1c32cmshc10b08ee95bbbbep1717bfjsn1825f318a1b5',
                    'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
                }
            };
            const bookResults = document.getElementById("bookResults");
            bookResults.innerHTML = ''; // Clear previous results
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('API Response:', data); // Log API response
                if (data.length > 0) {
                    // Process and display book data
                    data.forEach(book => {
                        const bookElement = document.createElement("div");
                        bookElement.classList.add("book-card");
                        bookElement.innerHTML = `
                            <h3>${book.title}</h3>
                            <img src="${book.cover}" alt="${book.title}">
                            <p>Author: ${book.author.first_name} ${book.author.last_name}</p>
                            <p>Rating: ${book.rating}</p>
                            <p>Plot: ${book.plot}</p>
                            <a href="${book.url}" target="_blank">More info</a>
                        `;
                        bookResults.appendChild(bookElement);
                    });
                } else {
                    // Handle no results
                    bookResults.innerHTML = 'No book found.';
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                bookResults.innerHTML = 'An error occurred while fetching data.';
            }
        }                    
    </script>
</body>