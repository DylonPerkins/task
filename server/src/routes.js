const AuthenticationController = require('./controllers/AuthenticationController')
const PostController = require('./controllers/PostController')
const ApplyTrackerController = require('./controllers/ApplyTrackerController')
const multer =require('multer')
var express = require('express');
//const upload = multer({dest:'uploads/'})
//app.use(express.static('uploads'))

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

const upload = multer({storage: storage})

module.exports = (app) =>{
    app.post('/register',
    AuthenticationController.register)
    
    app.post('/login',
    AuthenticationController.login)

    app.post('/post',
    PostController.PostJob)

    app.get('/index',
    PostController.index)

    app.post('/profile', upload.single('file'), function (req, res) {
        try {
            res.send(req.file)
        }catch (err){
            res.status(400).send({
                error:'File failed to Upload'
            })
        }
    })
   
    app.post('/apply',
    ApplyTrackerController.Apply)

    app.get('/applyGet',
    ApplyTrackerController.ApplyCheck)
}
