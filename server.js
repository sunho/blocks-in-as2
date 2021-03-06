const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname + '/docs'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/docs', 'index.html'));
});

app.listen(port);
