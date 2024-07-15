const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = process.env.PROCESS || 3000;

app.listen(port, () => {
    console.log(`Server is live at localhost:${port}`);
});