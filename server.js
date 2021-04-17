// Importing necessary packages
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const path = require('path');

// Setting up environment variables
require("dotenv").config();

// Creating an express app
const app = express();

// Applying the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(cors());

// Setting up routes
const userRoute = require("./routes/users.js");
app.use('/api/users', userRoute);

const noteRoute = require("./routes/notes.js");
app.use('/api/notes', noteRoute);

const memoryRoute = require("./routes/memories.js");
app.use('/api/memories', memoryRoute);

const authRoute = require("./routes/auth.js");
app.use('/api/auth', authRoute);

// Applying logging based on development environment
if (process.env.NODE_ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan('tiny'));
}

// Starting the app and listening to it at a port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Hoop running at ${port}`);
});

// Serving static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

// Setting up a mongoose connection
// Connect Mongoose 
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sandbox.vlco9.mongodb.net/hoopboop?retryWrites=true&w=majority`
mongoose.set("useNewUrlParser", true);
mongoose.set('useFindAndModify', false);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(uri)
    .then(() => console.log("Connected to the MongoDB"))
    .catch(err => {
        console.error(`Couldn't establish a connection: ${err.message}`);
        process.exit(0);
});

// Close mongoose connection on exit
if (process.env.NODE_ENV === "development") {
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected on app termination');
            process.exit(0);
        });
    });
}