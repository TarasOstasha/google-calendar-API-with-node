const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
var router = express.Router()
const calendar = require('./public/my-app');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser({ limit: '11111111mb' }));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log()
    calendar()
    next()
});


app.use('/', (req, res) => {
    //calendar();
    res.sendFile( path.join(__dirname, 'views', 'index.html') )
    //res.send('<iframe src="https://calendar.google.com/calendar/embed?src=tonyjoss1990%40gmail.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>')
  })


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    
})



