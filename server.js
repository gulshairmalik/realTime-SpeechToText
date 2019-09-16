const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

//Requring Routes Files
const home = require('./routes/home');

//Using Routes
app.use('/',home);

//Handling 404 For Non-Existent Routes
app.use((req,res) => {
    res.status(404).send('404 - Page Not Foud.');
});

//Setting View Engine
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'));


//Running the Server
app.listen(PORT, () => {
    console.log('Server started on port '+PORT);
});