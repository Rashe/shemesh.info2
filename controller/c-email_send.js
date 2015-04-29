var nodemailer = require("nodemailer");

exports.post = function (req, res) {

    var qRes = res,
        email = req.body.email,
        text = req.body.text,
        subject = 'From shemesh.info about',
        reciever = '@gmail.com';

    //TODO
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "@gmail.com",
            pass: ""
        }
    });

    var mailOptions = {
        from: email, // sender address
        to: reciever, // list of receivers
        subject: subject, // Subject line
        text: text
    };



    transporter.sendMail(mailOptions, function(error, info){
        if(error){

        }else{

        }
    });



};