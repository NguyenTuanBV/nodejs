const newRouter = require('./newsRou');
const meRouter = require('./meRou');
const myNewsRouter = require('./myNewRou');
const detailNewRouter = require('./detailNews');

// const coursesRouter = require('./coursesRou')

const homeRouter = require('./homeRou');
const loginRouter = require('./userRou')
function route(app){

    app.use('/news', newRouter);
    app.use('/myNews', myNewsRouter);

    // app.use('/courses', coursesRouter);
    
    app.use('/detailNews', detailNewRouter);
    app.use('/me', meRouter);
    app.use('/login', loginRouter);
    app.use('/', homeRouter);

}

module.exports = route;