// here we write the js for this html.page:
// with the help of (Jquery):

// 1 = first we see that how we can interact or write js for the html-page:In the simple js-format:
// var para1 = document.getElementById('para1');
// para1.innerHTML = 'welcome';

// 2 = second we learn about that how we can interact or write js for the html-page:with the help of (jquery-format) or library:
// => IMP = how we fetch-element  and provide (actions) to those (elements) with the help of using (jquery) in the (javascript):
// In simple JavaScript, we have different methods to fetch elements using an id or by class name. 
// But JQuery makes fetching of elements very easy by using (CSS-selectors) (just like the way we use in CSS). 
 
// The syntax for using jQuery is - $(selector).action() 
 
// 1 => ($) - defines a function to access jQuery 
// 2 => (selector) - CSS selector to query HTML elements 
// 3 => (action) - jQuery function to be executed on selected elements 
 
// We have some examples of fetching different elements - 
 
// ➔  $("p") - this will return all the p tags 
// ➔  $(".prim") - this will return all the elements with class 'prim' 
// ➔  $("#cringe") - this will return the element with id 'cringe' 
// ➔  $("span.light") - this will return all the span elements with class 'light' 
// ➔  $("form#subscribe") - this will return the form element with id 'subscribe' 
// ➔  $(".hide .del") - this will return all the elements with class 'hide' and 'del' 
 
// NOTE: The above examples will fetch the jQuery object and not the DOM object. 
 

// => example of fetch element and add action on that element:
// with the help of (jquery) in the js-file of html-page:
// 1 = first we use dollar ($) sign to access the (jquery):
// 2 = second we use (selector) by simply using bracket ():
// under that bracket.we will use the single or double quotes marks: ' ' , " ":
// with in those quotes.we will basically define the (css-selector) through which we will basically accessing our (html-element) in the javascript-file with the help of (jquery):
// IMP = here we are accessing the (html) element with the help of its (id) which we have given to him.the (id) html-elements basically comes under the (Simple-selectors) of css:
// 3 = third we will provide the (action) to that html-element:with the help of (jquery-functions):
// for giving the jquery (action) to that (html-element).we need to use the dot (.) after html-element and then we need to define the jquery-function.
// which we wanna gave to that html-element:like (html) action:
// 4 = fourth will we provide the (value) to the jquery-function.by simple using the brackets after the jquery-function.
// and under those brackets we use the single or doubles quotes.
// and with in those quotes.we will gave the (value) to that (jquery-function):
// V.MP = And that jquery-function basically proivde that value to the html-element.acc to its interaction behaviour with the html-elements:

// 1 => here we are changing the (html) value of (para1) html-element:

$('#para1').html('hey harish');

// working idea of  ($) function:through which we will access the (jquery):

// function $(query){
//     return document.querySelector(query);
// }

// 2 => if we want to hide the para1 html-element.then how we can do that with the help of jquery:
$('#para1').hide();

// IMP = there are several-function in jquery.through them we can manipulte our (html-elements):for example: html,text,width,etc:
// 3 => if we wanna gave or set the (width) for the (para2):then we can do that with the help of (width) fucntion of the jquery:
$('#para2').width(100);

// V.V.IMP = we can pass the (one-objects) data to the (another-object):
// and more importantly we can (manipulate) or (use) the (one-objects) data and (provide)  the (fucntions) and (methods) of the (another-objects) to it:
// after passing that (one-objects) data to the (another-object):
// it will become a part of (another-object).and then we can easily manipulate that data with its functions and methods:

// for-example:if we have html-element in the (dom-object):
// and we want to (manipulate) that element of (dom-object) with the help of jquery-object's (functions) and (methods):
// so for doing that we can simply pass on the (dom-object) to the (jquery-object):
// IMP = we can do that.by simply passing the (dom-object) to the ($) dollar-function.
// In this way we can add the (dom-object) into the (jquery-object).and know on that we can use the (function) and (method) of (jquery-object) to manipulate the (dom-object):

// => 1 =  here we have dom-object:
var dom_obj=document.getElementById("para3");
// => 2 = here we passing that dom-object to the jquery-object.with the help of ($) function:
$(dom_obj);
// now we can add all the (function) and (method) of the jquery-object on the dom-object to manipulate it:
$(dom_obj).html('hello everyone');




