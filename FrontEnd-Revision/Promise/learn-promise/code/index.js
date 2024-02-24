// here we are creating the task for the (promise):
// IMP => 1 =  if the (user) is logged-in:then we will tell that (promise) is (resolved):
// IMP => 2 = if the (user) is not Logged-in.then we will tell that (promise) is (rejected):
var userLoggedIn = true;

// => 1 = here we are creating the promise-object:by using the (promise) method with the (new) function:
// IMP = with in the (promise) object.we will create the (function):through which we gonna be handle the (async-task) with the help of promise:
// here we are creating the function with the help arrow-function method:
// IMP = know this function basically have the two arguments in it:
// first is (resolve):we can call the (resolve) as a  (callback) function: that when the (async-task) successfully get executed:
// second is (reject):same thing we do with the (reject).we can call the (reject) as a  (callback) function: when the (async-task) got (reject) or have some (errors) in it:
// V.IMP = we can also call the (resolve) and (reject) as a (callBack) functions:

var promise = new Promise((resolve, reject) => {
  // here we run the simple async-task:
  // we want to run some (text) after the (one-second) of when the hole application get executed on the browser:
  // for doing this we will use the (setTimeOut) method of javascript:
  // IMP = this method basically we having the two things in it:
  // => 1 = first is the (callback) function:through which we will (satteled) the setTimeout-method when its is done with it works or time-sequence:
  // when the (setTimeout) method is (satteled).then we will tell the system that the (promise) is resolved:
  // IMP = And then the promise will done its work:which we have given to its (resolve) argument of function:
  // => 2 = second it will define the (time) with in this method:
  // like how much time after we wanna sattele this setTimeout method:
  // this time should we define in the (form) of (milliseconds):
  // V.V.IMP = defining the timing to the setTimeout method does not means that:the function of setTimeout method will be executed exaclty after the time.it may take some more time to do it:
  setTimeout(() => {
    // promise is resovled:
    // when the (setTimeout) method is done with its work:
    // then we will call the (resolve) function of the proimse:
    // IMP = we can also pass the (arguments) to the (resolve) function:if we have or want any:
    // IMP = here we are adding the condition on the (resolve) function of the (promise):with the help of (useLoggedIn) variable's (value):
    // if (userloggedIn) variable value it ture:then it means that (user) is already logged in:
    // and then we trigger the (resolved) function of the promise:
    if (userLoggedIn) {

      resolve();
    }else{
        // if (user) is not loegged-in:
        // then we need to trigger the (reject) function of the promise:
        reject();
    }


  }, 3000);

});


// here we create the another (setTimeOut) method:
// through which we gonna be change the (value) of (userLoggedIn) variable:
// we gonna be trigger this method after the (5) milli-seconds:
// IMP = then basically run before the (promise) objects (setTimeout) method:and because of that the value of (userLoggedIn) variable has been changed:
// and that we are getting the (rejected) function value from the (promise):
setTimeout(()=>{
    userLoggedIn = false;
},500);



// => 2 =  how we handle the (resolve) function of the (promise):
// IMP = for handling the resolve function of the (promise):we use the its (then) method:
// with the help of (then) method:we gonna be handle the (resolve) function of the (promise):
// for handling the (resolve) function of the promise through the (then) method:
// IMP = we also need to create the callback function:with in the (then) method:through which we gonna be handle the (resolve) function of the (promise) object:
// => 3 = how we handle the (reject) function of the (promise) object:
// we hanlde it:with the help of promise's (catch) method:
// we also need to create the (callback) function:with in the (catch) method:through which we are going to be handle the (reject) funtion of the (promise) object:
// V.V.IMP-Note:both of these methods  are basically connected with the each other one after-another in the (promise) object through (dot) operator:
promise.then(() => {
    // alert('setTimeout_promise-is-resolved');
    console.log("setTimeout-Promise is Resolved:value => ",userLoggedIn);
}).catch(() => {
    console.log("setTimeout-Promise is Rejected;value => ",userLoggedIn);
});


