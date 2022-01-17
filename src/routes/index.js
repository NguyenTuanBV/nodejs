const newRouter = require('./newsRou');
const homeRouter = require('./homeRou');
const loginRouter = require('./userRou')
function route(app){
   
    app.use('/news', newRouter);
    
    app.use('/login', loginRouter);

    app.use('/', homeRouter);

}

module.exports = route;