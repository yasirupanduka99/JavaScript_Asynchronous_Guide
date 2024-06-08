console.log("------------- script.js File ------------");

// javascript promises basic example in promise_basic.js filr

// Lets make promise to avoid callback hell(nested callbacks)

const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const jsonData = JSON.parse(request.responseText);
        resolve(jsonData);
      } else if (request.readyState === 4) {
        reject("could not fetch the data!");
      }
    });

    request.open("GET", resource); // use 'response' instead of API end point("./todos.json") in here
    request.send();
  });

};


// calling function
getTodos('./todos_data/batman.json')
  .then((data) => {
    console.log("promise resolved: ", data);
  })
  .catch((error) => {
    console.log("promise rejected: ", error); // to see error edit API end point link. which is './todos_data/batman.json'
  })
