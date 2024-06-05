

// Getting data as JSON array of objects

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const jsonData = JSON.parse(request.responseText); // This JSON.parse() method do what is JSON data is strings. so this method convert(parse) those string to javascript objects.
      callback(undefined, jsonData);
    } else if (request.readyState === 4) {
      callback("could not fetch the data!", undefined);
    }
  });

  request.open("GET", "./todos.json"); // This './todos.json' is API end point, which we created JSON file with our own JSON data.
  request.send();
};


console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("Callback fired!");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);