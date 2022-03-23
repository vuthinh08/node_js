const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// xử lý dữ liệu truyền vào từ form bằng method post
app.use(express.urlencoded({ extended: true }));
// xử lý dữ liệu truyền vào từ form bằng method post sử dụng fetch, XMLHttpRequest, ...
app.use(express.json());
// HTTP logger
//app.use(morgan('combined'));
// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Home, search,...

// Routes Init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});