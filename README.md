# Dreamlabs API made in Node.js - for Dreamlabs - Backend Engineer interview


This Node.js application implements a simple REST API that allows users to add, retrieve, list, and delete items. The API is structured using Express and follows a modular design, with separate folders for routes, controllers, validators, and a temporary in-memory data store. All operations are performed via HTTP endpoints under the /api/items route. The application validates incoming requests using the express-validator library. Specifically, it ensures that each request to create a new item includes a non-empty name and a description with at least three characters. If these conditions are not met, the API responds with a 400 Bad Request status and provides detailed validation error messages in JSON format.
Error handling is implemented within the controller logic. If an item is not found during retrieval or deletion, the API responds with a 404 Not Found status and an explanatory message. All validation errors are collected and returned in a consistent structure, making it easy for clients to understand what went wrong.
# 5 files have been created: 
**The app.js** file is the main entry point of the application. It sets up the Express server, applies middleware to parse JSON requests, and mounts the items route. <br>
**The routes/items.js** file defines the four main API routes that have been tested in Postman.<br>
**The controllers/itemsController.js** file contains the business logic for each route. It handles request validation results, manages the data store, and formats the responses appropriately. Each function in this file corresponds to an HTTP method defined in the routes file. <br>
**The data/store.js** file holds an in-memory array that serves as a temporary item database. This allows the application to simulate CRUD operations without connecting to a real database.<br>
**The validators/itemValidator.js **file defines validation rules for incoming requests. It exports a middleware array that checks if the name field is not empty and if the description field has a minimum length of three characters. These rules are used in the route that creates new items.<br>

#Commands used in Postman
- `POST /api/items` – Add item  
  Body: `{ "name": "Item", "description": "text" }`
- `GET /api/items` – Get items
- `GET /api/items/:id` – Get item by ID
- `DELETE /api/items/:id` – Delete item by ID
