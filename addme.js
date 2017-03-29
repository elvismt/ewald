const user = require('./models/user');

(new user.User({
    fullName: 'Elvis Teixeira',
    userName: 'elvis',
    passWord: 'admin',
    memberSince: new Date,
    lastLogin: new Date,
    isAdmin: true
})).save();

