const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/greet', (req, res) => {
  const name = req.query.name;

  if (name) {
    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
  } else {
    res.json({ error: 'Name is required.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
