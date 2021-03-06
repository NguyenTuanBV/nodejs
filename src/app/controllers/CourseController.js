const Course = require('../models/CourseMod');
const {mongooseToObject,mutipleMongooseToObject} = require('../../util/mongoose');
class CourseController {

    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then(course => 
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next);
    
    }

    create(req, res, next){
        res.render('courses/create');
    }

    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(()=> res.redirect('/'))
            .catch(error => {

            })

    }
    edit(req, res, next){
        Course.findOne({slug:req.params.slug})
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next);
            
    }
    update(req, res, next){
        Course.updateOne({ slug: req.params.slug }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    delete(req, res, next){
        Course.findOneAndDelete({slug: req.params.slug})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}   


module.exports = new CourseController;
