# API-e-commerce
This repository will entail of Javascript and express heavily. Watch me master APIs here

Documentation for the User auth and rest of the system
Defining the user module
In real-world apps, we use databases to store data more efficiently. Since this is only a simple project, we wanted to keep things easy. So, we will build the API with SQLite, define the structure of the data in common/models/User.js, and store data in storage/data.db.

We’ll start by creating a new file called User.js. Next, in the same file, we will define our schema, which holds all the properties of a user (such as email, username, and password).

We’ll also specify the data type—and whether the data can be left void—for every user property. For the user ID, we’ll use auto-increment to automatically create a unique number when a new record is inserted into the table:
