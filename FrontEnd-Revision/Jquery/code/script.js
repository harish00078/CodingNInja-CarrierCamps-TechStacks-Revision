// here we write the js for this html.page with the help of (Jquery):

// (V.IMP) => 1 =  first how we can use the (jquery) to writing a (script) for the  (html-elements) in the javascript-file:
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

$("#para1").html("hey harish");

// working idea of  ($) function:through which we will access the (jquery):

// function $(query){
//     return document.querySelector(query);
// }

// 2 => if we want to hide the para1 html-element.then how we can do that with the help of jquery:
$("#para1").hide();

// IMP = there are several-function in jquery.through them we can manipulte our (html-elements):for example: html,text,width,etc:
// 3 => if we wanna gave or set the (width) for the (para2):then we can do that with the help of (width) fucntion of the jquery:
$("#para2").width(100);

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
var dom_obj = document.getElementById("para3");
// => 2 = here we passing that dom-object to the jquery-object.with the help of ($) function:
$(dom_obj);
// now we can add all the (function) and (method) of the jquery-object on the dom-object to manipulate it:
$(dom_obj).html("hello everyone");

// (V.IMP) => 2 =  second how we can use the (jquery) to writing a (css) for the (html-elements) in the javasript-file:
// first we need to (fetch) the (html) element in the javascript-file:with the help of (jquery):
// for fetching the element with the help of jquery:we need to use the (&) dollar function:
// then  we will use the dot (.) operator on the element:and after that we will use the (css) method of the (jquery):for providing the (css) to the (html) element:
// after the  (css) method of (jquery).we can provide the any (css) property to the (html-element):
// IMP => 1  = for proivding the (css) to the (html) element:
// with the help of jquery (css) method:
// we need to define the two-things:under that (css) method:
// first is the css (property-name) which we wanna gave to the (html-element):
// second we need to put the (,) comma.and after that (comma).we will define the (value) related to that (css-propert):
// which we wanna gave to the (html-element):
$("p").css("fontSize", "50px");
// IMP => 2 = we can also pass the multiple (css-properties)  to the one (html-element).In the one ($) dollar function:
// for doing that we need use the  (currly brackets) after the simple-brackets of jquery's (css) method:
// and under those currely-brackets:we can define the multiple (css-properties).by simply using the (semi-colons) with in the (css-property) and its (value):
// and for writing the another (css-property) in the same (dollar) function:we can use the (,) comma:and after that comma we can define the another (css-property) with the help of (semi-colons):the same way we define the first (css-property):
// IMP = other thing is that when we are adding the multiple css-properties:with the help of currly-bracket,(semi-colons) and (comma):
// 1 = In the form we can write the css (property-name) with the (single or double) quotes:
// 2 = we need to use the (single or double) quotes on the (value) of css-property 
$("#para3").css({ color: "cyan", fontSize: "30px" });

$('div').css({
    width:'100px',
    height:'100px',
    backgroundColor:"cyan",


})

// (V.IMP) => 3 =  third we learn about that. how we can use the (jquery) for adding (events) on the  (html-elements) in the javasript-file:

// IMP = for adding the events on the html-elements with the help of jquery:
// 1 = first we need to fetch the (html-element) with the help of jquery:by using the (dollar)function:
// 2 = second we can add the (event) on that element.with the help of (event) methods of (jquery):for example the (click) event-method:
// through this event-method:we can handle the click on the (element).which  has been trigger by the (user):
// 3 = for handling the (event) of the (element):
// we need to create the (function):through which we gonna be handle the (event):

// IMP => 1 =  this is the one-way to do it:by simple defining the (event-method):after the (.) dot of (html-element):

// $('div').click(function(){
    // for example. I want to show the alert on the (click) event of that particular element:
    // for doing that we need to create the (alert) with in that (function):
    // we can do that with the help of (alert)  method:
//     alert('hey everyone.!!! how are you');


// });

// IMP => 2 =  this is the second-way to do it:
// In this way:
// 1 = first we use the (on) method after that (.) dot of (html-element):
// 2 = and with  in that (on) method:
// -> first we define the (event) method with in the (quotes).
// -> second we define the (function) to handle that (event):we separate them both with the (,) comma:
$('div').on('click',function(){
    alert('hey everyone.!!! how are you',console.log('hey everyone'));

});

// IMP => (event-object) = we can also work on the (event-object):because when user trigger the event.
// by using any of the (event-methods):like (click) event-method:we gets the (event-object):
// for using that (event-object):we simple have to pass that (event) to the (function) as an (argument):through which we are handling the (event) of the particular element:
// and after passing it to the (function). as a (argument):we can use that (event-object).under the (event) function and work on it:
$('a').on('click',function(event){
    event.preventDefault();
    alert('Anchor tag clicked');
});

// IMP => (add-css) = how we can add or manipulate the (css) of the element.with in the (event) or (triggered-event) of the element:
// for adding and manipulating the (css) of the (element).with in its (event):
// 1 = for doing that first we need to (fetch) the (element). with in the (event-hanlder) function of element:
// 2 = we can fetch the (element) with the help of jquery's (this) method:
// (this) method of the jquery.will have the (element) with in it :
// we can also to store tha (element).with in the (variable):so that we can work on it:
// after getting the (element):with in the (event-handler) fucntion:
// we can work on it:and provide the (css) properties to it:

$('div').on('click',function(){
    var element = $(this);
    // 1 = we can gave the simple value to its (css) property:
    // element.width(1000);
    // 2 = or we can gave some (working) sequence (css) to the (element):
    // acc to when (every) time this (event) get (trigger).we want to do some changes in the (css) properties of the particular (element):
    // for-example:we want to change the width of the (element) by (10) px.when ever (user) click on this (element):
    element.width(element.width() + 10 + 'px');
    // alert('Anchor tag clicked');
});
