const New = require('../models/NewMod')
const {mutipleMongooseToObject,mongooseToObject} = require('../../util/mongoose');
class NewsController {

    index(req, res, next){
        New.find({})
            .then(news =>{
              res.render('news', {
                    news: mutipleMongooseToObject(news),
                });
            })
            .catch(next);
       
    }

    create(req,res){
        New.create(req.body, function(err, news){
            if(!err) {
                res.json(news);
            }
            else{
                res.status(400).json({error: res});
            }
        })
    }

    getId(req, res){
        // const id = req.params._id;
        New.findById(req.params.id, function(err, news){
            if(!err) {
                res.json(news);
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }

    
    edit(req, res, next){
        New.findOne({slug: req.params.slug})
            .then(news => res.render('news/edit', {
                news: mongooseToObject(news)
            }))
            .catch(next);
    }

    update(req, res, next){
        New.updateOne({slug: req.params.slug}, req.body)
            .then(() => res.redirect('/myNews/stored/news'))
            .catch(next);
    }

    delete(req, res, next){
        New.deleteOne({slug: req.params.slug})
            .then(() => res.redirect('/back'))
            .catch(next);
    }
}

module.exports = new NewsController;
