const New = require('../models/NewMod');
const {mongooseToObject,mutipleMongooseToObject} = require('../../util/mongoose');
class MyNewsController {
    storedNews(req, res, next){
        New.find({})
            .then(news => res.render('myNews/stored-news', {
                news: mutipleMongooseToObject(news)
            }))
            .catch(next);
    }
    
}   


module.exports = new MyNewsController;
