

const request = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if(request.readyState === 4){
    console.log("could not fetch the data to request1");
  }
});

request2.addEventListener("readystatechange", () => {
  if (request2.readyState === 4 && request2.status === 200) {
    console.log(request2.responseText);
  } else if(request2.readyState === 4) {
    console.log("could not fetch the data to request2");
  }
});

// For getting error code 404 not found, im edit API endpoint link todos to todoss.
request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
request.send();

// For getting success code 200 OK, I'm adding correct API endpoint link
request2.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request2.send();
