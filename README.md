# API-e-commerce
This repository will entail of Javascript and express heavily. Watch me master APIs here

Setting up a Node.js app

Step 1: Install Node.js and NPM
The first thing we’ll need to do is install Node.js on our machine. You can download the latest LTS version from the official Node.js website. Follow the prompts in the Node.js Installer and customize the defaults, if necessary. When you’re done, you should have installed Node.js, as well as NPM (Node Package Manager). You can verify the installation by running the following commands in your terminal:

node -v
npm -v

If you see the versions of Node.js and NPM show up, your installation was successful.


Step 2: Create a new project folder
Next, we’ll create a new folder for the project by running the following command in your terminal (note that entering this command as-is will name your project “node rest api,” but you can change the name, if you’d like):

mkdir node-rest-api

To navigate to your project, enter this command:

cd node-rest-api

Step 3: Initialize a new Node.js application
To initialize your app, run the following command in your terminal:

npm init

You will be prompted to enter your project name, description, and GitHub repository. You can accept the defaults by pressing Enter/Return, or customize them.
Next, open this project in your editor, where you will see a new file called  package.json. This file contains the data you added about your project in the terminal. It also describes how you’re going to run the project and lists its dependencies (frameworks and libraries).

Step 4: Install Express and other dependencies
From here on, you can run all your commands in your editor’s terminal.

Run the following command to install the Express framework:

npm install express

Step 5: Import necessary modules
We’ll start by creating a new file named app.js in the root of the project directory. We’ll use this file to set up the app. Then, we’ll load the dependencies so we can use them. In the app.js file, add the following code to import Express:

const express = require(‘express’);

Now, let’s set up Express to create an app and configure it to parse requests with JSON payloads. Here’s the code you can add to do that:

const app = express ();
app.use(express.json());


Step 6: Define a route that listens to requests
Now we need to make this application a server by getting it to listen for connections. To do this, we’ll connect to a port to listen for incoming requests.

In the app.js file, we’ll add the following code to define the server code:

const PORT = process.env.PORT || 3000;

With the process.env.PORT variable, we set up the port automatically by allowing the API to be deployed to a cloud platform like AWS or Azure. In case the process.env.PORT variable is not set, we’ll default to using port 3000.

Next, we’ll add the following code to the app.js file in order to set up the server to listen on the specified port:

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", port);
});

Step 7: Define an endpoint
Let’s start by defining a status endpoint to ensure the API is working.

Express lets you define routes using the app.METHOD() function. Here, METHOD refers to the different HTTP methods, like GET, POST, PUT, and DELETE. For a GET request, you’d define the route by adding an app.get() function. This function has two parameters. We’ll use the first parameter to define the path. In this case, it is the /status endpoint:

app.get(“/status”, ());

Next, we’ll add a callback function as the second parameter, which defines what we will do when the request is called. This function has two parameters: the request object (which contains details like the HTTP method, headers, and request body) and the response object (which defines the information that we want to send). The response (res) object contains different methods of sending a response to the client, such as res.send(), res.json(), and res.render().

Here’s what it looks like now:

app.get(“/status”, (request, response));
With response.send(), we then define the response we want to return. But since we want to send back JSON, we’ll need to first define a JSON object. So, we define a status variable and create an object:

response.send(status) is now a function that takes the JSON object as the argument.

app.get(“/status”, (request, response) => {
   const status = {
      “Status”: “Running”
   };
   
   response.send(status);
});

Now, we’ll create the following API endpoints for user management:

POST /signup: Registering a new user
POST /login: Logging in
GET /user: Retrieving a user’s profile (restricted to the user themselves)
PATCH /user/:userId: Updating a user’s profile (restricted to the user themselves)
GET /user/all: Retrieving all users (available to all users)
PATCH /user/change-role/:userId: Updating a user’s role (restricted to admins)
DELETE /user/:userId: Deleting a user (restricted to admins)

Documentation for the User auth and rest of the system

Defining the user module
In real-world apps, we use databases to store data more efficiently. Since this is only a simple project, we wanted to keep things easy. So, we will build the API with SQLite, define the structure of the data in common/models/User.js, and store data in storage/data.db.

We’ll start by creating a new file called User.js. Next, in the same file, we will define our schema, which holds all the properties of a user (such as email, username, and password).

We’ll also specify the data type—and whether the data can be left void—for every user property. For the user ID, we’ll use auto-increment to automatically create a unique number when a new record is inserted into the table:
