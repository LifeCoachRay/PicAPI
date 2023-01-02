Image Server

This code provides a simple server for sending and retrieving image files. It is built using the Express.js framework and the body-parser middleware.

Features

POST route at ‘/send_picture’ for accepting and saving image data to a file
GET route at ‘/get_picture’ for reading and returning the image file as base64-encoded data

Built with Express.js and body-parser for easy use in various applications
Usage

Install dependencies: npm install express body-parser
Run the server: node server.js

Send a POST request to the ‘/send_picture’ route with the ‘image_data’ field in the request body to save an image file. The image data should be base64-encoded.
Send a GET request to the ‘/get_picture’ route to retrieve the saved image file as base64-encoded data.

The server will listen for incoming requests on port 8000.
