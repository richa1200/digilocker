const path = require('path')
const express  = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('homepage');
});


const basePath = path.join(__dirname, '../public')

app.use(express.static(basePath))

app.listen(8080);
console.log('Server is listening on port 8080');