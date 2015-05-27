var Blog = require('../model/m-blog').Blog;
var fs = require('fs');

exports.post = function (req, res) {
    Blog.showAllPosts(function (posts) {

        var output = '';
        var site_url = 'https://shemesh.info';
        var temp_start = '<?xml version="1.0" encoding="utf-8"?><rss version="2.0"><channel>';
        var temp_end = '</channel></rss>';
        var main_title = '<title>Shemesh.info RSS feed</title>';
        var main_description = '<description>Shemesh.info</description>';
        var main_link = '<link>' + site_url + '</link>';
        var item_el_start = '<item>';
        var item_el_end = '</item>';


        //console.log('posts', posts);

        output += temp_start + main_title + main_description + main_link;

        for (var i = 0; i < posts.length; i++) {
            output += item_el_start;
            output += '<title>' + posts[i].post_title + '</title>';
            output += '<link>' + site_url + '/' + posts[i].post_link + '</link>';
            output += '<description>'+posts[i].post_teaser + '</description>';
            output += item_el_end;
        }

        output += temp_end;


        console.log('t ', output);

        
        
        fs.writeFile('../public/rss.xml', output, function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        });

    });
};











