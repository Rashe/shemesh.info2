var nodemailer = require("nodemailer");

exports.post = function (req, res) {

    var qRes = res,
        user = req.session.user,
        title = req.body.title,
        post_link = req.body.post_link,
        post_body = req.body.post_body,
        post_publish = req.body.publish;

    if (post_link == '') {
        var arr = title.toLowerCase().split(" ");
        post_link = arr.join('_');
    }

    var blog_data = [user, title, post_link, post_body, post_publish];


    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "@gmail.com",
            pass: ""
        }
    });


    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });



};