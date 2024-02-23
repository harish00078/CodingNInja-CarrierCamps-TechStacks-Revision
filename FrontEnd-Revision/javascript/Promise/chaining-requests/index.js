// here we create the multiple (async-tasks) in the form of sequence or chain:
// we wanna be executed those Async-task in the form of one-after another:
// In the async-tasks: we have create the (ajax-requests):

// => 1 = firstly we gonna be handle these chain async-task or ajax request in the simply-way:by call-back functions:
// V.V.IMP = and this is known as (callback-hell):
// $.ajax({
//   // IMP = here our first ajax request get satteled:
//   success: function () {
//     // IMP = and with in the response-function of first-Ajax-request:
//     // we will make  the another (ajax) request:
//     $.ajax({
//       // with in this ajax-request:we also need to create the another function:
//       // through which we gonna be handle the response of this second (ajax) request:
//       success: function () {},
//     });
//   },
// });

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
// promise1.then().then().then().catch();

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
