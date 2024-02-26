---
layout: base
title: Database Get
hide: true
description: An advanced example of database CRUD (Create, Read, Update, Delete).  This articles is focussed on Read.  Each operation works asynchronously between JavaScript and a Python/Flask backend Database.  This requires a set of Python RESTful API services for Get, Put, Delete, and Update.
permalink: /data/database
---

## Reviews

<!-- HTML table layout for page.  The table is filled by JavaScript below. 
-->
<table>
  <thead>
  <tr>
    <th>Title</th>
    <th>Review</th>
    <th>Rating</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>

<!-- 
Below JavaScript code fetches user data from an API and displays it in a table. It uses the Fetch API to make a GET request to the '/api/users/' endpoint.   Refer to config.js to see additional options. 

The script is laid out in a sequence (no function) and will execute when page is loaded.
-->
<script type="module">
  // uri variable and options object are obtained from config.js
  import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js'; // Adjust the path as necessary
// Function to fetch book reviews from the database
function fetchBookReviews() {
    // Construct the endpoint URL using the base URI
    const url = `${uri}/api/book_reviews/`;
    // Reference to the HTML element where the results will be displayed
    const resultContainer = document.getElementById("result");
    // Clear previous results
    resultContainer.innerHTML = '';
    // Execute the fetch command with the URL and options imported from config.js
    fetch(url, options)
        .then(response => {
            // Check for response status
            if (!response.ok) { // If response is not ok, throw an error
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); // Parse JSON data from the response
        })
        .then(data => {
            // Process the data and update the DOM with the fetched data
            data.forEach(row => {
                const tr = document.createElement("tr");
                const title = document.createElement("td");
                const review = document.createElement("td");
                const rating = document.createElement("td");
                title.textContent = row.title;
                review.textContent = row.review;
                rating.textContent = row.rating;
                tr.appendChild(title);
                tr.appendChild(review);
                tr.appendChild(rating);
                resultContainer.appendChild(tr);
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.colSpan = 3; // Assuming there are three columns in your table
            td.textContent = "Failed to load book reviews: " + error.message;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
        });
}
// Call the function to fetch book reviews when the page loads
document.addEventListener('DOMContentLoaded', fetchBookReviews);