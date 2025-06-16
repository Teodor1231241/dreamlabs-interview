const express = require('express');
const app = express();
const itemsRoutes = require('./routes/items');

app.use(express.json());
app.use('/api/items', itemsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
