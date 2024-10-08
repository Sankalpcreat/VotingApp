const express = require('express');
const app = express();
// require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
