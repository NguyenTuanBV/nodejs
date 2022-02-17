const Course = require('../models/CourseMod');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const { response } = require('express');
class HomeController {

    index(req, res, next){
        res.setHeader("Access-Control-Allow-Origin", "*");
        // Course.find({})
        //     .then(courses => {
        //         // res.render('home', {
        //         //     courses: mutipleMongooseToObject(courses),
        //         // });
        //         courses = courses.map(course => course.toObject())
        //         res.render('home', {courses})
        //     })
        //     .catch(next);



        Course.find({}, function(err, courses){
            if(!err) {
                res.json(courses);
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })

    }

    create(req,res){
        Course.create(req.body, function(err, courses){
            if(!err) {
                res.json(courses);
            }
            else{
                res.status(400).json({error: res});
            }
        })
    }

    getId(req, res){
        Course.findById(req.params.id, function(err, courses){
            if(!err) {
                res.json(courses);
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }
    
    update(req, res){
        Course.findByIdAndUpdate(req.params.id,req.body, function(err, courses){
            if(!err){
                res.status(200).send({message: 'update thành công'});
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }

    deleteId(req, res){
        Course.findByIdAndRemove(req.params.id, function(err){
            if(!err){
                res.status(200).send({message: 'xóa thành công'});
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }
   

    searchCourse(req, res){
        const name=req.query.name;
        Course.find({name:{$regex:name,$options:'$i'}}, function(err, courses){
            if(!err) {
                res.json(courses);
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })

    }
    // create(req, res, next){
    //     res.render('/create');
    // }
}   

module.exports = new HomeController;
