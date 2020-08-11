const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BeltExamDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB connection established."))
    .catch(err => console.log("No.", err))