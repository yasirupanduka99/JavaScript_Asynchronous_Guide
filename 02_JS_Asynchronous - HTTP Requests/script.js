console.log("Make HTTP requests to get data from another server");
console.log("We make these requests to API endpoints");

console.log(
  "Example API endpoint: https://jsonplaceholder.typicode.com/todos/1"
); // This sample API endpoint get from jsonplaceholder web site. they are totaly free
console.log(
  "If we want data from this API endpoint we have to send HTTP GET request to this API endpoint and this API endpoint hit in perticular server and throw a response back."
);

// Let see How to actually do this

// Create a new object to make requests to a web server
const request = new XMLHttpRequest();

// Set up a listener for the 'readystatechange' event
request.addEventListener("readystatechange", () => {
  // Check if the request is completed (readyState === 4)
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

// Configure the request: GET method to the URL 'https://jsonplaceholder.typicode.com/todos/'
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

// Send the configured request to the server
request.send(); // You can see request and response data through browser network tab.

// Note: Inspect the request and response details in the browser's network tab for further analysis.
