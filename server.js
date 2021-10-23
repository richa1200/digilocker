const express  = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('homepage');
});

app.listen(8080);
console.log('Server is listening on port 8080');