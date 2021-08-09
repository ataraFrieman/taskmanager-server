const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

const mongooseOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};



// Connect to the DB an initialize the app if successful

mongoose.connect(process.env.DATABASE_URI, mongooseOptions)
    .then(() => {
        console.log("Database connection successful");
        
        // Create express instance to setup API
        const ExpressLoader = require("./loaders/express.loader");
        new ExpressLoader();
    })
    .catch(err => {
        //eslint-disable-next-line
        console.error(err);

    });