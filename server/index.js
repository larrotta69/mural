const express = require('express');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('Node app is running on port', PORT);
});
