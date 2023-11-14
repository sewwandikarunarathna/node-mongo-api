# Project Name
Node_api
RESTful CRUD API using Node.js, Express, and MongoDB

# Steps to build the app
When creating RESTful API using Node.js , first you will instal package.json file with following command.\
`npm init -y`

You can create server.js file. This is the main file for this application.\

Then you have to install express. Express is the backend framework which is used with Node.js\
`npm i express or npm install express`

Installing nodemon allows you to prevent running the command "npm run serve" everytime make changes to the code. it prevents time consuming. using it, you can run the app automatically when make changes.\
`npm i nodemon -D` (D means dependency)

__Connecting app with database__
You use mongoDB as database. first you will install mongoose.\
`npm i mongoose`
Go to the mongoDB Atlas and create a new database\
import mongoose in server.js using require(), use it to connect with mongoDB atlas

__Creating a model for data in database__
The purpose of model is to connect the app with the database and get access to data. You can create a folder 'models', inside it, the models are located.\
In the model there is 'schema', helps to determine which fields are included in the model. It's like a blueprint of model.\
Using the model to, 
- create data
- fetch data
- update data
- delete data

# Refactor the Project
__Creating .env file__
Storing sensitive details in .env file. To install env,
`npm i dotenv`
To include in server.js file\
`require('dotenv').config()`
You can cut mongodb url from server.js file and paste in .env file.\\

__Implementing MVC Architecture__
MVC is Model, View, Controller. In this case, View is Routes.\
Creating Routes folder and create a file to save routes.\
Creating Controllers folder and create a file to save all controllers.\

__Creating Custom Middleware__
Middleware helps to customize errors when displaying errors.\
Creating middleware folder and create a file to include error middlewares.\