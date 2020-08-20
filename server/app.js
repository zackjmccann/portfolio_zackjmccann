// var createError = require('http-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var indexRouter = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     console.log("Creating 404 Error");
//     next(createError(404));
// });
  
// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     console.log("Passed by next()")
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.json({
//         message: err.message,
//         error: err
//         });
// });

app.use('/', indexRouter);

module.exports = app;
