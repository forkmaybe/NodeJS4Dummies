node app.js
console.log("https://www.codecademy.com/learn/learn-node-js/modules/introduction-to-node-js/cheatsheet")

global
//Adding new property to global
global.car = 'delorean'

if (process.env.NODE_ENV === 'development'){
  console.log('Do not deploy!! Do not deploy!!');
}

// Command line values: node web.js testing several features
console.log(process.argv[2]); // 'features' will be printed


//using process.memoryUsage() will return an object in a format like this:
 
{ rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772 }

  const baseball = require('./babeRuth.js')

  const util = require('util');

  // type.js
// by using the export property we can use this module in another file
module.exports = class key {
    constructor(car) {
    this.car = car;
  }
};
 
// qwerty.js
// by requiring the type.js file we can we use the module in the type.js file
let Dog = require('./type.js');


// Require in the 'events' core module
let events = require('events');
 
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
let version = (data) => {
 console.log(`participant: ${data}.`);
};
 
// Assign the version function as the listener callback for 'new user' events
myEmitter.on('new user', version)
 
// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad')
// 'Lily Pad'

let endgame = () => {
  console.log('I am inevitable')
};
 
// endgame will run after 1000ms
setTimeout(endgame, 1000); 

// Recieves an input
process.stdin.on();
 
// Gives an output
process.stdout.write();

// First argument is the file path
// The second argument is the file’s character encoding
// The third argument is the invoked function
fs.readFile('./file.txt', 'utf-8', CallbackFunction);

const http = require('http');

// required in the http core module.
const http = require('http');
 
let requestListener = (request, response) => {
    // code to be filled in depending on server
};
 
// assigning return value
const server = http.createServer(requestListener);
 
// assigning server port
server.listen(3000);

// Readable stream
readline.createInterface();
 
// Writtable Stream
fs.createWriteStream();

const bufferAlloc = Buffer.alloc(10, 'b'); // Creates a buffer of size 10 filled with 'b'

const bufferAlloc = Buffer.alloc(5, 'b');
console.log(bufferAlloc.toString()); // Ouptut: bbbbb


const bufferFrom = Buffer.from('Hello World'); // Creates buffer from 'Hello World' string

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('World');
const bufferArray = [buffer1, buffer2];
 
const combinedBuffer = Buffer.concat(bufferArray);
console.log(combinedBuffer.toString()); // Logs 'HelloWorld'


//The setImmediate() function executes the specified callback function after the current event loop has completed. The function accepts a callback function as its first argument and optionally accepts arguments for the callback function as the subsequent arguments.

setImmediate(() => {
  console.log('End of this event loop!');
})


const http = require('http');
 
// Create instance of server
const server = http.createServer((req, res) => {
  res.end('Server is running!');
});
 
// Start server listening on port 8080
server.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

const http = require('http');
 
const server = http.createServer((req, res) => {
  
  // Set status and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  // Send response
  res.end('Hello World');
});
 
server.listen(8080);

/* Deconstructing a URL */
 
// Create an instance of the URL class
const url = new URL('https://www.example.com/p/a/t/h?query=string');
 
// Access parts of the URL as properties on the url instance
const host = url.hostname; // example.com
const pathname = url.pathname; // /p/a/t/h
const searchParams = url.searchParams; // {query: 'string'}
 
 
/* Constructing a URL */
 
// Create an instance of the URL class
const createdUrl = new URL('https://www.example.com');
 
// Assign values to the properties on the url instance
createdUrl.pathname = '/p/a/t/h';
createdUrl.search = '?query=string';
 
createUrl.toString(); // Creates https://www.example.com/p/a/t/h?query=string

// Parse a querystring into an object with query parameter key/value pairs
const str = 'prop1=value1&prop2=value2';
querystring.parse(str); // Returns { prop1: value1, prop2: value2}
 
// Build a querystring from an object of query parameters
const props = { "prop1": value1, "prop2": value2 };
querystring.stringify(props); // Returns 'prop1=value1&prop2=value2'
 
// Percent-encode a querystring
const str = 'prop1=foo[a]&prop2=baz[b]';
querystring.escape(str); // Returns 'prop1%3Dfoo%5Ba%5D%26prop2%3Dbaz%5Bb%5D'
 
// Decode a percent-encoded querystring
const str = 'prop1%3Dfoo%5Ba%5D%26prop2%3Dbaz%5Bb%5D';
querystring.unescape(str); // Returns 'prop1=foo[a]&prop2=baz[b]'
const options = {
  hostname: 'example.com',
  port: 8080,
  path: '/projects',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}
 
// Make request to external API
const request = http.request(options, res => {
  // Handle response here
});


const http = require('http');
 
// Creates server instance
const server = http.createServer((req, res) => {
  try {
    // Do something here
  } catch(error) {
    res.statusCode = 500; // Sets status code to indicate server error
    return res.end(JSON.stringify(error.message));
  }
});
 
// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});



