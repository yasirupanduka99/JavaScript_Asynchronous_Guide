console.log("------------- promise_basic.js File ------------");

// promise example
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    resolve("some data");
    reject("some error");
  });
};

// calling function - there are two ways to do that

// 1st way
getSomething()
  // '.then' contains if promise resolve(success) then getting data and if promise reject(error) then getting error message or perticular task
  .then(
    (data) => {
      // First callback function do resolve
      console.log(data);
    },
    (error) => {
      // Second callback function do reject function
      console.log(error); // to see the error comment 'resolve('some data');' line in getSomething().
    }
  );

// 2nd way - 1st way mightbe confusing, 2nd way is better.
getSomething()
  .then((data) => {
    // then do resolve(success) things
    console.log(data);
  })
  .catch((error) => {
    // catch do reject(error) things
    console.log(error);
  });
