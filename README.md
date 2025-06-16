# Dreamlabs API made in node.js


# 5 files have been created: 
# ─ app.js -entry point
# - routes/ items.js -API routes
# ─ controllers/ itemsController.js -main logic
# ─ data/ store.js - in-memory data store
# ─ validators/ itemValidator.js - validation rules for the input

# This has been tested in Postman
- `POST /api/items` – Add item  
  Body: `{ "name": "Item", "description": "text" }`
- `GET /api/items` – Get items
- `GET /api/items/:id` – Get item by ID
- `DELETE /api/items/:id` – Delete item by ID
