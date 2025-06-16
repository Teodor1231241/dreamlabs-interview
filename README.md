# Dreamlabs API made in node.js

# This has been tested in Postman
- `POST /api/items` – Add a new item  
  Body: `{ "name": "Item", "description": "Some text" }`
- `GET /api/items` – Get all items
- `GET /api/items/:id` – Get a single item by ID
- `DELETE /api/items/:id` – Delete an item by ID

# 5 files have been created: 
# ─ app.js -entry point
# - routes/ items.js -API routes
# ─ controllers/ itemsController.js -main logic
# ─ data/ store.js - in-memory data store
# ─ validators/ itemValidator.js - validation rules for the inpute
