// Lets make callback hell - So we try to get json data from three files one after another, so to do that we need nested callbacks. that means callback hell.

const getTodos = (response, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const jsonData = JSON.parse(request.responseText);
      callback(undefined, jsonData);
    } else if (request.readyState === 4) {
      callback("could not fetch the data!", undefined);
    }
  });

  request.open("GET", response); // use 'response' instead of API end point("./todos.json") in here
  request.send();
};

console.log(1);
console.log(2);

getTodos("./todos_data/yasiru.json", (err, data) => {

  console.log("1st Callback fired!");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }

  // calling getTodos() function for nested callback to get data after 1st callback fired.
  getTodos("./todos_data/batman.json", (err, data) => {
    console.log("2nd Callback fired!");
    if (err) {
      console.log(err);
    } else{
      console.log(data);
    }

    // calling getTodos() function for nested callback to get data after 2nd callback fired.
    getTodos("./todos_data/superman.json", (err, data) => {
      console.log("3rd Callback fired!");
      if(err) {
        console.log(err);
      } else{
        console.log(data);
      }
    });

  });

});

// This nested callbacks are callback hell. So this is not clean way. so thats my we talk about promises in next chapter to as solution for this.

console.log(3);
console.log(4);
