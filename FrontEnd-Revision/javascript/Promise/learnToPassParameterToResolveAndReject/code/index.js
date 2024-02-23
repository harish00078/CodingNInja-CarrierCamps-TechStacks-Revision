var userLoggedIn = true;
// IMP = we basically create and wrap-up our (promise) under the (function):
function checkUserLoggedIn() {

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
  // here we are returning the (promise) to this function:
  // so that function can use the (promise):
  return promise;
}

setTimeout(() => {
  userLoggedIn = false;
}, 500);

// IMP = we basically access the (promise)  through the (function):
// V.IMP = for using promise through function:we need to call the function:
// here we are accessing the (parameter) of the (resolve) function in the (then) method:
// and we named it as (successMsg):
checkUserLoggedIn()
  .then((successMsg) => {
    // with in the callback function of (then) method: we are using the (parameter) value of resolve function: and we provide that value to (console.log) function of javascript:
    console.log(successMsg);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
