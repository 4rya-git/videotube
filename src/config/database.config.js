const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');

const connectDB = async () => {
    try {
       const connection = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
       console.log(`MongoDB connected! DB host: ${connection}`);
    } 
    catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
};