const express = require ('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs/:id', function(req, res, next){

    Blog.findById({_id: req.params.id}).then(function(){
      Blog.findOne({_id: req.params.id}).then(function(blog){
        res.send(blog);
      }).catch(next);
    });
});

router.post('/blogs', function(req, res, next){
    Blog.create(req.body).then(function(blog){
        res.send(blog);
    }).catch(next);
});

router.put('/blogs/:id', function(req, res, next){
    Blog.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Blog.findOne({_id: req.params.id}).then(function(blog){
            res.send(blog);
        });
    }).catch(next);
});

router.delete('/blogs/:id', function(req, res, next){
    Blog.findByIdAndRemove({_id: req.params.id}).then(function(blog){
        res.send(blog);
    }).catch(next);
});

module.exports = router;
