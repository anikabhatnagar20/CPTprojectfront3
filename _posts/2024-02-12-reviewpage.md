---
comments: True
layout: base
title: Reviews 
description: Allows users to review over books they have read 
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /Review
---
<html lang="en">
<head>
    <style>
        body {
            font-family: 'Times New Roman', Times, serif;
            margin: 50px;
        }
        textarea, input[type="text"] {
            width: 100%;
            margin-bottom: 10px;
        }
        input[type="radio"] {
            margin-bottom: 10px;
        }
        button {
            padding: 10px;
            background-color: #ffaa00;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .flex-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .flex-container h2, .flex-container input[type="text"] {
            margin: 0; /* Adjust spacing as needed */
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <h2>Book Title:</h2>
        <input type="text" id="bookTitle" placeholder="Enter book title"> 
    </div>
    <!-- Review Box -->
    <div>
        <form id="reviewForm">
            <h3>Write a Review</h3>
            <textarea id="reviewText" placeholder="Write your review here"></textarea>
            <h3>Rating</h3>
            <input type="radio" name="rating" value="1" id="rating1"><label for="rating1">1</label>
            <input type="radio" name="rating" value="2" id="rating2"><label for="rating2">2</label>
            <input type="radio" name="rating" value="3" id="rating3"><label for="rating3">3</label>
            <input type="radio" name="rating" value="4" id="rating4"><label for="rating4">4</label>
            <input type="radio" name="rating" value="5" id="rating5"><label for="rating5">5</label>
            <!-- Submit Button -->
          <button id="my-reviews"><a href='{{site.baseurl}}/data/review'> Submit review 
    <script src="submitReview.js"></script>
<script src="submitReview.js"></script>
<script type="module"> 
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
    const url = uri + '/api/review/authenticate';
    const body = {
            // name: document.getElementById("name").value,
            Title: "Great Gatsby",
            review: "A classic piece of American literature."
            // dob: document.getElementById("dob").value
        };
    const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };
    fetch(url, authOptions)
    function createReview(){
        // Set Authenticate endpoint
        const url = uri + '/api/reviews/';
        // Set the body of the request to include login data from the DOM
        const body = {
            title: document.getElementById("title").value,
            review: document.getElementById("review").value,
            rating: document.getElementById("rating").value,
        };
        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };
        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
               window.location.href = '{{site.baseurl}}/data/review'
                return;
            }
            // Success!!!
            // Redirect to the database page
            window.location.href = "{{site.baseurl}}/data/review";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }
    // Attach login_user to the window object, allowing access to form action
    window.createReview = createReview;
      