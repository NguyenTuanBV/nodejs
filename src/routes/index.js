const newRouter = require('./newsRou');
const coursesRouter = require('./coursesRou')
const homeRouter = require('./homeRou');
const loginRouter = require('./userRou')
function route(app){
   
    app.use('/courses', coursesRouter);

    app.use('/news', newRouter);
    
    app.use('/login', loginRouter);

    app.use('/', homeRouter);

}

module.exports = route;