// Async/Await

// fetch("./todos_data/batman.json") // This fetch function is a promise.
//   .then((response) => {
//     console.log("resolved", response); // This response dosen't show data.
//     return response.json(); // Parse the JSON from the response
//   })
//   .then((data) => {
//     console.log(data); // Handle the JSON data from the response
//   })
//   .catch((error) => {
//     // this catch only catching network errors.
//     console.log("rejected", error);
//   });


// Do getting data using async/await
const getTodos = async () => { // Asynchronus functions always return promise

  const response = await fetch('./todos_data/superman.json');
  const data = await response.json();

  return data;

}

// Calling function
getTodos()
  .then((data) => { // If getTodo function success, then 'then' works
    console.log("resolved: ", data);
  })
  .catch((err) => { // If then failed(getTodo function failed, then 'catch' works)
    console.log("rejected: ", err.message);
  });

