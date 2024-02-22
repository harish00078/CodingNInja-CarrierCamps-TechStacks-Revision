var userLoggedIn = true;
var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userLoggedIn) {
      // here we are passing the parameters to the (resolve) function of   promise-object:
      // IMP = here we are passing the (string) to the (resolve) function as a parameter:
      // so we can use that (string) in the (then) method:if the (resolve) function of Promise-object get triggered:
      resolve("user Logged In");
    } else {
        // same things we do with the (reject) function:
      reject("user Not Logged In");
    }
  }, 3000);
});

setTimeout(() => {
  userLoggedIn = false;
}, 500);

// here we are accessing the (parameter) of the (resolve) function in the (then) method:
// and we named it as (successMsg):
promise
  .then((successMsg) => {
    // with in the callback function of (then) method: we are using the (parameter) value of resolve function: and we provide that value to (console.log) function of javascript:
    console.log(successMsg);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
