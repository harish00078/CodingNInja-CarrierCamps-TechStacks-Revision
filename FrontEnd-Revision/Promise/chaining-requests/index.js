// here we create the multiple (async-tasks) in the form of sequence or chain:
// we wanna be executed those Async-task in the form of one-after another:
// In the async-tasks: we have create the (ajax-requests):

// => 1 = firstly we gonna be handle these chain async-task or ajax request in the simply-way:by call-back functions:
// V.V.IMP = and this is known as (callback-hell):
$.ajax({
  // IMP = here our first ajax request get satteled:
  success: function () {
    // IMP = and with in the response-function of first-Ajax-request:
    // we will make  the another (ajax) request:
    $.ajax({
      // with in this ajax-request:we also need to create the another function:
      // through which we gonna be handle the response of this second (ajax) request:
      success: function () {},
    });
  },
});

// => 2 = second we gonna be handle these chain async-task or ajax request with the help of (promise):
// here we gonna be see that:how promises help us from the callback-function hell:

// IMP = when first (ajax-request) is get satteled:then its means that first promise-object is also get resolved:
// because we are handling the ajax-requests with the help of (promises):
// so for handling the (resolved-function) of first ajax-request's promise-object:
// we gonna be use the (then) method:
// IMP = know what here we do is:with in the (ajax) request we have the multiple (ajax) request:these ajax requests basically are in the form of (chain) sequence:
// so these all ajax-request get executed one-after another:and we are handling them with the help of (promises):
// IMP = so for handling the resolved-function of all those ajax-request's promises-objects:
// what we gonna be do that:we gonna be use the (then) Method one-after another on the promise-object:
// IMP = and for handling the error:related to any of the ajax-request in the promise-object:
// we gonna be use the (catch)Method:
// it will let us know that:which ajax-request is get failed or have error:
promise1.then().then().then().catch();

// V.V.IMP = we gonna be understand it with the help of (example):

var userLoggedIn = true;
var userInfo = {
  name: "harish",
  age: 24,
};
var userfriendsdata = {
  firstName: "rahul",
  lastName: "kumar",
};

function getUserInfo() {
  return new Promise((resolve, reject) => {
    if (userLoggedIn) {
      resolve("User is logged in");
    } else {
      reject("user not logged in");
    }
  })
    .then((successMsg) => {
      console.log(successMsg);
      return new Promise((resolve, reject) => {
        if (userLoggedIn) {
          resolve(userInfo);
        } else {
          reject("User info not available");
        }
      });
    })

    .then((userInfo) => {
      console.log(userInfo);
      return new Promise((resolve, reject) => {
        if (userInfo) {
          resolve(userfriendsdata);
        } else {
          reject("User friends data not found");
        }
      });
    });
  // .then((userfriendsdata) => {
  //   console.log(userfriendsdata);
  // })
  // .catch((errorMsg) => {
  //   console.log(errorMsg);
  // });
}
getUserInfo()

  .then((userfriendsdata) => {
    console.log(userfriendsdata);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });



// => IMP = how we can make the ajax request with in the promise:

// You don't actually need to create an additional promise within an existing promise to make an AJAX request. JavaScript's AJAX libraries like (jQuery) and (Fetch-API) already return promises, allowing you to directly chain your AJAX call with other actions using the (.then) and (.catch) methods. Here are two ways to achieve this:

// => 1. Using jQuery:


$.ajax({
  url: "your_url",
  type: "GET",
  dataType: "json" // Specify the expected data type
})
.then(function(data) {
  console.log("Data received:", data);
  // Perform further actions with the received data
})
.catch(function(error) {
  console.error("Error:", error);
  // Handle potential errors
});

// => 2. Using Fetch API:

JavaScript
fetch("your_url")
.then(response => response.json()) // Parse the response as JSON
.then(data => {
  console.log("Data received:", data);
  // Perform further actions with the received data
})
.catch(error => {
  console.error("Error:", error);
  // Handle potential errors
});

// => 1 = In both examples, the AJAX call returns a promise. The .then method is used to handle the successful response, while the .catch method handles any errors that might occur. You can chain multiple .then methods to perform sequential operations after receiving the data.
// => 2 = It's important to note that depending on your specific use case, you might need to further process the received data before using it. This could involve parsing JSON responses or handling potential errors in your .catch block.



// Here are additional points to remember:

// => 1 =Specify the data type: In both scenarios, remember to specify the expected data type (e.g., "json") using dataType (jQuery) or the second parameter of the fetch call (Fetch API).
// => 2 = Error handling: Always include a .catch block to handle potential errors during the AJAX request or data processing.
// => 3 = Security: Be mindful of security risks when making AJAX requests, such as Cross-Site Scripting (XSS) vulnerabilities. Make sure to properly sanitize any user-provided data before using it in your request.