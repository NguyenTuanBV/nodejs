const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
var bodyParser = require('body-parser');




const hbs = handlebars.create({extname: '.hbs'})

const route = require('./routes');
const db = require('./config/db');
db.connect();


app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));
app.use(express.static(path.join(__dirname, '/resource/views')));

console.log(__dirname)

route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
