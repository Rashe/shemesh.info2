var mongoose = require('./mongoose');

var schema = mongoose.Schema({
    post_user: {
        type: String
    },
    post_title: {
        type: String
    },
    post_link: {
        type: String
    },
    post_body: {
        type: String
    },
    post_published: {
        type: Boolean
    },
    post_dateCreate: {
        type: Date,
        default: Date.now
    }
});

schema.statics.showAllPosts = function (callback) {
    var Blog = this;
    Blog.find({post_published: true}).sort({post_dateCreate: 'desc'}).exec(function (err, posts) {
        callback(posts);
    });
};

schema.statics.showAllPostsAdmin = function (callback) {
    var Blog = this;
    Blog.find({}, function (err, posts) {
        if (posts.length != 0) {
            callback(posts);
        } else {
            var def_data = {
                def_data: "No posts"
            };
            callback(def_data);
        }
    });
};

schema.statics.countPostsAdmin = function (callback) {
    var Blog = this;
    Blog.count({}, function (err, posts) {
        if (posts != null) {
            callback(posts);
        } else {
            var def_data_count = {
                def_data_count: "0"
            };
            callback(def_data_count);
        }
    });
};

schema.statics.create_post = function (post_data, callback) {
    var Blog = this, publish;
    if (post_data[4] == null) {
        publish = false;
    } else {
        publish = true;
    }
    var create_post = new Blog({
        post_user: post_data[0],
        post_title: post_data[1],
        post_link: post_data[2],
        post_body: post_data[3],
        post_published: publish
    });

    create_post.save(function (err) {
        if (err) throw  err;
    });
    callback();
};

schema.statics.showPost = function (post_link, callback) {
    var Blog = this;
    Blog.findOne({post_link: post_link}, function (err, post) {
        if (post != null) {
            callback(post);
        } else {
            callback(false);
        }
    });
};

schema.statics.showPostEdit = function (post_link, callback) {
    var Blog = this;
    Blog.findOne({post_link: post_link}, function (err, post) {
        if (post != null) {
            callback(post);
        } else {
            callback(false);
        }
    });
};

schema.statics.postEdit = function (blog_data, callback) {
    var Blog = this, publish;
    Blog.findOne({_id: blog_data[5]}, function (err, post) {
        if (post != null) {
            post.post_user = blog_data[0];
            post.post_title = blog_data[1];
            post.post_link = blog_data[2];
            post.post_body = blog_data[3];
            if (blog_data[4] == null) {
                publish = false;
            } else {
                publish = true;
            }
            post.post_published = publish;
            post.save();
            callback(true);
        } else {
            callback(false);
        }
    });
};


exports.Blog = mongoose.model('Blog', schema);