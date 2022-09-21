const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));

app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE");
    next();
    console.log("*******");
})
app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE");
    next();
})
app.get('/', (req, res) =>{
    res.send('HOME PAGE!');
})

app.get('/dogs', (req, res) =>{
    res.send('Woof Woof!');
})

app.listen(3000, () => {
    console.log('App is running on localhost: 3000');
})
