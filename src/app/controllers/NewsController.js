const New = require('../models/NewMod')

class NewsController {

    index(req, res){
        New.find({}, function(err, news){
            if(!err) {
                res.json(news);
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
            
        })
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

    deleteId(req, res){
        New.findByIdAndRemove(req.params.id, function(err){
            if(!err){
                res.status(200).send({message: 'xóa thành công'});
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }

    update(req, res){
        New.findByIdAndUpdate(req.params.id,req.body, function(err, news){
            if(!err){
                res.status(200).send({message: 'update thành công'});
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }

    deleteId(req, res){
        New.findByIdAndRemove(req.params.id, function(err){
            if(!err){
                res.status(200).send({message: 'xóa thành công'});
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }
    
}

module.exports = new NewsController;
