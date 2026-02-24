const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from Azure VM Self-Hosted Agent!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
