// IMP =  here we are writing simple javascript code:
// 1 = for (running) and (executing) the javascript-code outsite the browser or (browser) console we can say:
// we need to use the (runtime-environment) which help us to (run) and (execute) javascript code outside the (browser) or browser-console:
// and that's where the (Node.js) came in:with the help of it.we are able to (run) and (execute) javascript code outside the (browser) or browser-console:


// 1 =  {Note-IMP} => Important thing is that how does the (javascript) code run in the (console) of (local-machine) and (Browser):

// =>(local-machine) :-
// 1 =  In our local machine we use (node.js) to (run) and (execute) the our-code on console.
// 2 = And also in other hand with in the (node.js). It use the  (v8-engine)or we can say (v8-runtime-engine) to run and execute that code on our local-machine (console) .and the (v8-engine) is also build on the (c++) language:

// => (browser):-
// 1 = same thing happen on the (browser) and browser-console as well.because the (chrome) browser also run on the (v8-engine):


// 2 =  {Note-IMP} => who does we are able to access and run the javascript-code outside the (console) of (local-machine):

// => (local-machine):
// 1 = for that we need to create the (server).
// we need to create the (server) acc to the language which we want to use in our (server):
// so we want to use the (javascipt) language.through which we will create a (server):
// know we have to use the compatible (runtime-environment) acc to the (language) which we have choose:
//  through which we are able to  create the (server) for it.And that (runtime-environment) is (Node.js):

// => (browser):-
// 1 = for having access on that (server-code) either that code is running on the (local-machine) or (cloud-machine):
// 2 = we need to use the (browser).which (use) or we can say (understand) the code of that (server):so for that here we are using the (chrome-browser):
// because our (server) and (browser) run on the same (runtime-engine) and that is (v8-engine):


// IMP :- Use of Node.js:
// => for-excample: It's widely used for building fast, scalable, and real-time server-side applications, as well as command-line tools and other versatile applications.
// => Common use cases:
// 1 = Web application backends: Building APIs, RESTful services, and real-time applications.
// 2 = Data streaming apps: Handling real-time data feeds and I/O-intensive tasks.
// 3 = Single-page applications (SPAs): Powering the server-side logic for dynamic and interactive web experiences.
// 4 = Microservices architectures: Creating small, independent services that communicate with each other.
// 5 = Command-line tools and automation: Scripting tasks, automating workflows, and building developer tools.
// 6 = Internet of Things (IoT): Connecting devices and managing data streams in real-time.


console.log("hello world!");

function add(a, b) {
  return a + b;
}
console.log(add(2, 8));
