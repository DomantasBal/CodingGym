const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'welcome to random ideas api' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
