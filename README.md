# Dreamlabs API made in Node.js - for Dreamlabs - Backend Engineer interview


This Node.js application implements a simple REST API that allows users to add, retrieve, list, and delete items. The API is structured using Express and follows a modular design, with separate folders for routes, controllers, validators, and a temporary in-memory data store. All operations are performed via HTTP endpoints under the /api/items route. The application validates incoming requests using the express-validator library. Specifically, it ensures that each request to create a new item includes a non-empty name and a description with at least three characters. If these conditions are not met, the API responds with a 400 Bad Request status and provides detailed validation error messages in JSON format.
Error handling is implemented within the controller logic. If an item is not found during retrieval or deletion, the API responds with a 404 Not Found status and an explanatory message. All validation errors are collected and returned in a consistent structure, making it easy for clients to understand what went wrong.

# Commands used in Postman
- `POST /api/items` – Add item  
  Body: `{ "name": "Item", "description": "text" }`
- `GET /api/items` – Get items
- `GET /api/items/:id` – Get item by ID
- `DELETE /api/items/:id` – Delete item by ID
