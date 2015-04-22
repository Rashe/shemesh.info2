var Blog = require('../model/m-blog').Blog;
var async = require('async');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    //var username = req.session.user;

    async.parallel({
        all_posts: function (callback) {
            Blog.showAllPostsAdmin(function (posts) {
                callback(null, posts);
            });
        },
        count_posts: function (callback) {
            Blog.countPostsAdmin(function (count) {
                callback(null, count);
            });
        }
    }, function (err, results) {
        res.render('page-blog_admin', {data: data_content, css: 'blog_admin', blog_admin: results});
    });
};











