const express = require ('express');
const app = express();
const port = 3000;

const oiController = require('./src/controllers/oiController');

app.use(express.json());

app.get('/oi', oiController.sayOi);

app.listen(port, () => {
    console.log(`API está rodando em http://localhost:${post}`);
});