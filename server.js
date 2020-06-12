// Base setup
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const app = express();

// inital port
const port = process.env.PORT || 3000;

// body-parser 
app.use(bodyParser.urlencoded({ extended: false}));

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Database (connecting to database that is stored on the config folder)
const db = require('./dist/config/database')


// test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))




// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


require("./routes/htmlRoutes")(app);


// db routes 
app.use('/subscribe', require('./routes/subscribe'));



// app.use(express.static(__dirname + "/dist/html"));
app.use(express.static(__dirname + "/dist/css"));
app.use(express.static(__dirname + "/dist/JS"));
app.use(express.static(__dirname + "/dist/img"));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
