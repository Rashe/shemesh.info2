var Blog = require('../model/m-blog').Blog;
var async = require('async');
var url = require('url');
var errors = require('../data/errors');
var data_content = require('../data/content');

exports.get = function (req, res) {
    var url_parts = url.parse(req.url, true).pathname.split("/");
    var post_url = url_parts[3];
    Blog.showPostEdit(post_url, function (callback) {
        if (callback == false) {
            res.render('page-error', {data: data_content});
        } else {
            res.render('page-blog_edit_post', {data: data_content, css: 'blog', post_data: callback});
        }
    });
};


exports.post = function (req, res) {
    var qRes = res,
        user = req.session.user,
        title = req.body.title,
        post_link = req.body.post_link,
        post_body = req.body.post_body,
        post_publish = req.body.publish,
        post_id = req.body.post_id;

    if (post_link == '') {
        var arr = title.toLowerCase().split(" ");
        post_link = arr.join('_');
    }
    var blog_data = [user, title, post_link, post_body, post_publish, post_id];

    Blog.postEdit(blog_data, function (call) {
        qRes.send({});
    });
};


