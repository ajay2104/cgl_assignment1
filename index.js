const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(adminRoutes);

app.listen(5000,function(req,res,next){
    console.log('App is running on port 3000');
})