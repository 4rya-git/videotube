const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const healthCheckRoutes = require('./routes/healthCheck.routes');

require('dotenv').config({ 
    path: path.resolve(__dirname, './.env') 
});

app.use(express.json()); // app.use(express.json({limit: "16kb"})); // Allows all the json data to come in, the limit parameter limits the size of the data
app.use(express.urlencoded({extended: true})); // Allows the data to come in urlencoded format, limit can also be added here

app.use(
    cors({
        origin: process.env.CORS_ORIGIN, // This is allowed to interact with our backend
        credentials: true,
    }),
);


app.use('/health-check', healthCheckRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is live at localhost:${port}`);
});