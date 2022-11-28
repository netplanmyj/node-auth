// const port = 3000;
// import { createServer } from "http";

// const server = createServer((request, response) => {
//     response.writeHead(200, {
//       "Content-Type": "text/html"
//     });

//     const responseMessage = "<h1>Hello Node.js!</h1>";
//     response.write(responseMessage);
//     response.end();
//     console.log(`Sent a response : ${responseMessage}`);
// });

// server.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

const port = 3000;
import express from "express";
const app = express();

app.get("/", (request, response) => {
    response.send("<h1>Hello Express.js!</h1>");
}).listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});