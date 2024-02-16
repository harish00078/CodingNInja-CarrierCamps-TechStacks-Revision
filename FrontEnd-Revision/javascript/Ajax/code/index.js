// => 1 = here we learn about that:how we can use the (ajax) in our applicaiton:with the help of (jquery):

// 4 = here we have the function:
// through which we gonna be made the (ajax) request to the (server):
// when ever user trigger this paritcular application element:
function fetchRandomDogImage() {
  // IMP = know for sending the (ajax) request to the (server):
  // 1 = first we need to create the (XMLHttpRequest) or we can say the (XMLHttpRequest) object:
  // IMP = we also need to use the (new) method for creating the (XMLHttpRequest):
  var xhrRequest = new XMLHttpRequest();

  // 2 = second we need to define the (handler).through we are going to be handle the (response) which we are getting from the (server) related to our (ajax) request:
  // IMP = for creating the (handler).we need to use the (onload) method:
  // IMP = and for handling the (response):with the help of that (handler).we need to create the (function) for it:
  xhrRequest.onload = function(){

    // IMP = the data which we are getting from the (server).that will be in the (response) section of our (ajax's) request:
    console.log(xhrRequest.response);
    // IMP => 1 = In the (response) from the (server) related to our (ajax) request:
    // we are getting the (JSON) format-data:
    // we need convert that (JSON) format-data in the (native-javascript-object) format:
    // because we are  not direclty able to use the (JSON) format-data in the javascript-file of our application:
    // for converting the (JSON) format-data into the simple (javascript-object) format:we need to use the built-in function of (javascript) and that is (JSON.parse()):
    var responseJSON = JSON.parse(xhrRequest.response);
    
    // IMP => 2 = after converting the JSON (data) in the simple javascript-object form:
    // know we need to get the particular thing from that (data):which will basically have the (response) related to our (request):
    // like we are getting the (url) response from the (server).that (url) basically refer to the (particular) image:
    // IMP = that (url) basically be in the (message) section of our (server's) response-data:
    var imageUrl = responseJSON.message;

    // IMP => 3 = know after getting the image (url) from the message-section of our (server's) response-data:
    // we need to provide that (url) to the (elememt) of our application:through which we are showing the (Image) of that (url) on our application:
    // IMP = we gonna do that with the help of (jquery):
    // 1 = first we fetch the element:
    // 2 = second we need to provide the (attribute) to that (element):through which we gonna be show the image of that (url):
    // 3 = we are using the (src) attribute.and to that attribute we will provide the (url) which we are getting from the (server):


    $('#dog-image').attr('src',imageUrl);







  }


  // 3 = third after  handling (onload) function of the (request).know we have to (initialize) this (request):
  // we can do that with the help of (open) method:
  // IMP = with in the (open) method.we need to define that multiple things.which are related to our (ajax) request):
  // IMP = and we need to define these things with in the (quotes):
  // like:
  // 1 = first we define the (method) of the (request):
  // 2 = second we define what is the (url) of the (request):
  // 3 => IMP = third we can define the (async) method with in it:for defining that if we want this (ajax) request to be (synchronours) and (asychronous):
  // IMP = we only have to write the (ture) or (false) for it:for defining the (async) method in the (request):
  // IMP = The 'async' option is a boolean parameter defining asynchronous request when true (by default is true) or synchronous request when it is false.
  // 4 = fourth we can define the some kind of (data) related to the (user):like (email):
  // 5 = fifth we can define the (password) related to the (user):if we have any:
  xhrRequest.open("get", "https://dog.ceo/api/breeds/image/random",true);

  // 4 = know after initializing the (request):we need to make the (request) or we can say (send) the (request) to the (server):
  // IMP = for doing that we can use the (send) method:
  xhrRequest.send();



}

// 1 = for using it in our application:first we need to fetch the (element) of our application in the javascript file:
// 2 = second we need to add the (event) on that element:so we know that (user) want to trigger the ajax request  to the (server):when ever the (user) trigger the event of that element:
// 3 = third we will pass the (function) to that event:through which we gonna be basically made the (ajax) request to the (server):when ever that event get trigger by the user:through that (element) or by triggering that element:
$("#fetch-dog-image-button").click(fetchRandomDogImage);
