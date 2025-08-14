const express = require ('express');
const app = express();
exports.app = app;
const port = 3000;


app.use(express.json());

app.listen(port, () => {
    console.log(`API está rodando em http://localhost:${post}`);
});