console.log("JavaScript is single thread language - That means it run line by line(one line at a time)");
console.log("Example: ");

// Javascript run one line at a time
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);


// Callback functions start now and finish later
    console.log(5);
    console.log(6);

    //setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.
    setTimeout(() => { // This callback function start at this line and finish after 2 seconds.
        console.log("callback function fired! : It start after 6th number but finish after 8th number. that means callback function show result after 2 seconds and meantime other code statement also do their task without pasuing statement excutmnet. this means Asynchronus JavaScript✨.");
    }, 2000);

    console.log(7);
    console.log(8);