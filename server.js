const express = require('express');
const db = require('./db/connection');
// const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', apiRoutes);


// default response for any request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
})

//start sever after db connection
db.connect(err => {
    if (err) throw err;
    console.log('database connected');
    app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
})

