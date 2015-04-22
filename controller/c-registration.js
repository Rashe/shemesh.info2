var User = require('../model/m-user').User;
var Setti = require('../model/m-settings').Setti;
var Encript = require('./c-crypto').Encript;
var Valida = require('./c-validator').Valida;
var errors = require('../data/errors');

exports.post = function (req, res, next) {
    Setti.regEnableCheck(function (callback) {
        if (callback.registration == false) {
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end(errors.disabled_reg);
            return;
        }
        else {

            if ((Valida(req.body.username, 'str_num') == false) || (Valida(req.body.email, 'email') == false)) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.fuck_you);
            }

            var qRes = res,
                user = req.body.username,
                email = req.body.email,
                pass = req.body.password,
                hashedPass = Encript(user, pass),
                ghh = req.body.ghhh;


            if (user == '' || user == null || user == false) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.fuck_you);
            } else if (pass == '' || pass == null) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.fuck_you);
            } else if (ghh != '') {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.fuck_you);
            } else if (email == false) {
                res.writeHead(403, {"Content-Type": "text/plain"});
                res.end(errors.fuck_you);
            }
            else {
                var regis_data = [user, email, hashedPass];
                User.register(regis_data, function (call) {
                    if (call == false) {
                        res.writeHead(403, {"Content-Type": "text/plain"});
                        res.end(errors.user_exist);
                    } else {
                        req.session.user = user;
                        qRes.send({});
                    }
                });
            }
        }
    });
};
