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


// calling function - making chaining promises
getTodos('./todos_data/batman.json')
  .then((data) => {
    console.log("promise 1 resolved: ", data);
    return getTodos('./todos_data/superman.json');
  })
  .then((data) => { // this `then` work when only first `then` work successfully
    console.log("promise 2 resolved: ", data);
    return getTodos('./todos_data/yasiru.json');
  })
  .then((data) => { // this  `then` work when only second `then` work successfully
    console.log("promise 3 resolved: ", data);
  })
  .catch((error) => { // this `catch` block catch any error throw from upper `then`s.
    console.log("promise rejected: ", error); // to see error edit API end point link in any getTodo. which is './todos_data/batman.json'
  })
