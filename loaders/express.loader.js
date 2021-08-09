const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors')
const fileUpload = require("express-fileupload");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

class ExpressLoader {
    constructor() {
        const app = express();
        app.use(cors());
        app.use(cookieParser())
        app.use(fileUpload({ createParentPath: true }));
        app.use(bodyParser.json());

        app.use(bodyParser.urlencoded({
            extended: true
        }));
        // Serve static content
        // app.use( express.static( path.join( __dirname, "uploads" ) ) );

        // Set up middleware
        // Pass app to routes
        // routes(app);

        app.all("/*", function (req, res, next) {
            res.header("Access-Control-Allow-Origin", req.headers.origin);
            res.header("Access-Control-Allow-Credentials", true);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
            if (req.method === 'OPTIONS') {
                res.status(200).end();
            } else {
                next();
            }
        });
        // Start application
        this.server = app.listen(3000, () => {
            console.log(`Express running, now listening on port 3000`);
        });
    }

    get Server() {
        return this.server;
    }
}

module.exports = ExpressLoader;