// This file gets mongoose modularized, get mongoose and the DB connection set up.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/full_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection established"))
    .catch(() => console.log("Failed to connect to the database"));
