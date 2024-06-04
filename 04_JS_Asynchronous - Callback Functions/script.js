// Convert our API request resuable using creating a function and all the implementation make inside the function. then make it callback function
const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText); // instead of 'console.log(request.responseText);' use callback();
    } else if (request.readyState === 4) {
      callback("could not fetch the data!", undefined); // instead of 'console.log("could not fetch the data to request1");' use callback();
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

// Let's practise Asyncronous behaviours
// First create normal function see diffrence of callback function and normal function diffrence.
function normalFunction() {
  console.log("Normal Function Fired!");
}

console.log(1);
console.log(2);

// Calling normal Function after 2nd number print
normalFunction();

// We can call this callback functions anywhere anytimes. and do diffrent tasks with data.
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

// This callback function calling will show result after number 4 show in console. and normalFunction will start after 2 number print and finish also that time.
// This means callback function do their task separatly and meantime other statement can fired. but other statement have to wait until normalfunction do their task, after that only javascipt can fired other statements.
// That is how use callback functions to do Asynchronus task in JavaScript.
