function displayImage(data) {
  console.log("NASA-api:data", data);
  // V.IMP => 1 = one way of doing it:this is basically a title bit slower method in terms of code-performance wise:
  // IMP = here we are creating the element:with the help of (jquery):
  // with the help of  $-operator we can  basically create the (image-tag) element:

  $("<img>", {
    src: data.url,
    //we can define the css related to image-tag here:
    height: "100%",
    width: "100%",

    // and we want this image-tag.To be shown in  between the (div-tag) element of our application:
    // IMP = so for doing this we are using the (appendTo) method:
  }).appendTo("#image-container");
    // V.IMP => 2 = second way of doing it:this is basically more appropriate  and fast way of doing it:
    // In this way we can use the (document.createElement) method of the (DOM) to create a element:
    // IMP = here we also have two ways to do it:
    // this is the first way:
    $(document.createElement('img')).attr('src',data.url).appendTo('#image-container');
    // this is the second way:
    var img  = $(document.createElement('img'));
    img.attr('src',data.url);
    img.appendTo('#image-container');
    // we can also write the (appendTo) method in this way:
    $('#image-container').append();
}
$.ajax({
  // IMP = simple nasa-api
  //   url:"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",

  // IMP = here we modify the nasa-api:we have basically remove the (api-key) and (query) parameter of the nasa's (api-url):
  // we have put them in the (data) object:through which we will basically define or add the multiple things in our (api-url):
  // like: we can add the multiple querys in our (api-url) with the help of (data) object:
  url: "https://api.nasa.gov/planetary/apod",
  // IMP = we can also pass  other-parameters to this (api-url):
  // like: if we want the (picture) from (api) which  is realated to the particular (date):
  // then we have to pass that (date) to the (api-url):
  // for doing this we need to use the (&) ampersent: and then after that we will create the (date) key.with in that (date) key we will define the (date).whose picture we want to access:
  //   url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-06-05",

  method: "GET",
  success: displayImage,
  // here we have create the (data) object:through which we gonna be pass the mulitple (querys) to our api-url:
  data: {
    api_key: "DEMO_KEY",
    // date:'2018-06-05'
  },
}).fail(function (errorThrown) {
  console.log(
    "request fialed:=> ",
    errorThrown.responseJSON.error.code,
    ".....+.....",
    errorThrown.responseJSON.error.message
  );
});
