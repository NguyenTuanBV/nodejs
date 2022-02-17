const New = require('../models/NewMod')
const {mutipleMongooseToObject,mongooseToObject} = require('../../util/mongoose');
class DetailNewsController {

    show(req, res, next){
        New.findOne({ slug: req.params.slug })
            .then(news => {
               res.render('detailNews/show', {news: mongooseToObject(news)})
            })
            .catch(next);
    }

    create(req, res, next){
        res.render('detailNews/create');
    }

    store(req, res, next){
        const news = new New(req.body);
        news.save()
            .then(()=>res.redirect('/'))
            .catch(error =>{
                
            });
    }
    
}

module.exports = new DetailNewsController;
