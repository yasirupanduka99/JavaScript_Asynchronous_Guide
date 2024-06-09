// fetch API

// The Fetch API is a modern interface that allows you to make network requests similar to XMLHttpRequest (XHR).

fetch("./todos_data/batman.json") // This fetch function is a promise.
  .then((response) => {
    console.log("resolved", response); // This response dosen't show data.
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data); // Handle the JSON data from the response
  })
  .catch((error) => {
    // this catch only catching network errors.
    console.log("rejected", error);
  });