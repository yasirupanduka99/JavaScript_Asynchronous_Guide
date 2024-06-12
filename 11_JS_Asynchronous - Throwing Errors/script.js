// Throwing Errors


const getTodos = async () => {

  const response = await fetch('./todos_data/supermans.json'); // API endpoint edited to getting error ("superman.json => supermans.json")

  if(response.status !== 200){
    // Using below statement you can create customer error and throw
    throw new Error('cannot fetch the data! :: This is custom Error 😉'); //This line throw new Error, when API end Point failed
  }

  const data = await response.json();

  return data;

}

// Calling function
getTodos()
  .then((data) => {
    console.log("resolved: ", data);
  })
  .catch((err) => {
    console.log("rejected: ", err.message);
  });