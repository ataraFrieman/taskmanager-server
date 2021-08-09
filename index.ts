import {connect } from 'mongoose';
import * as dotenv from 'dotenv';
import endpoint from './endpoints.config';

dotenv.config()

const mongooseOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Connect to the DB an initialize the app if successful

connect(endpoint.DatabaseUrl, mongooseOptions)
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

