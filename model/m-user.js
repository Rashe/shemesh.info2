var mongoose = require('./mongoose');

var schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreate: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    lastIp: {
        type: String
    }
});

schema.statics.showAllUsers = function (callback) {
    var User = this;
    User.find({}, function (err, users) {
        if(err){
            //err
        }
        
        callback(users);
    });
};

schema.statics.lastInfos = function (username, callback) {
    var User = this;
    User.findOne({username: username}, function (err, userDb, next) {
        if(err){
            //err
        }
        
        if (userDb.lastLogin) {
            callback(userDb.lastLogin);
        } else {
            callback(userDb.dateCreate);
        }
    });
};

schema.statics.authorize = function (login_data, callback) {
    var User = this;
    User.findOne({username: login_data.user}, function (err, userDb, next) {
        if(err){
            //err
        }
        
        if (userDb == null) {
            callback(1);
        } else if (userDb.password != login_data.hashedPass) {
            callback(2);
        }
        else {
            userDb.lastLogin = new Date();
            userDb.save();
            callback();
        }
    });
};

schema.statics.register = function (data, callback) {
    var User = this;
    User.findOne({username: data.user}, function (err, userDb) {
        if(err){
            //err
        }
        
        if (userDb) {
            callback(false);
        }
        else {
            var createUser = new User({
                username: data.user,
                email: data.email,
                password: data.hashedPass
            });

            createUser.save(function (err) {
                if (err) throw  err;
            });
            callback();
        }
    });
};

schema.pre('save', function (next) {
    this.lastLogin = new Date();
    next();
});

exports.User = mongoose.model('User', schema);