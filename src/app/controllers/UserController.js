const Login = require('../models/UserMod')
class LoginController {

    index(req, res){
      
        Login.find({}, function(err, logins){
            if(!err) {
                res.json(logins);
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
            
        })
    }

    getId(req, res){
        // const id = req.params._id;
        Login.findById(req.params.id, function(err, logins){
            if(!err) {
                res.json(logins);
            }
            else{
                res.status(400).json({error: 'ERROR!!!'});
            }
        })
    }
    
    
    
}

module.exports = new LoginController;
