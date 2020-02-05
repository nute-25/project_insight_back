/** Import librairy and user model **/
// const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register_a_user = (req, res) => {
    const new_user = new User(req.body);
    try {
        new_user.save((error, user) => {
            if (error) {
                res.status(400);
                res.json({ message: 'Il manque des informations' });
            }
            else {
                res.status(201);
                user = user.toObject();
                // delete user.password
                user.password = undefined;
                res.json(user);
                // res.json({email : user.email});
            }
        });
    }
    catch (error) {
        res.status(500);
        res.json({ message: 'Erreur serveur' });
    }
};

exports.list_all_users = (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: 'Erreur serveur.' });
        }
        else {
            res.status(200);
            res.json(users);
        }
    });
};

exports.update_a_user = (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, { new: true }, (error, user) => {
        try {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({ message: 'Il manque des informations.' });
            }
            else {
                res.status(200);
                res.json(user);
            }
        }
        catch (error) {
            res.status(500);
            res.json({ message: 'Erreur serveur.' });
        }
    });
};

exports.delete_a_user = (req, res) => {
    User.deleteOne({ _id: req.body._id /* User.get_a_user()*/ }, (error, user) => {
        try {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({ message: 'Il manque des informations.' });
            }
            else {
                res.status(200);
                res.json(user);
                console.log('deleted');
            }
        }
        catch (error) {
            res.status(500);
            res.json({ message: 'Erreur serveur.' });
        }
    });
};

exports.get_a_user = (req, res) => {
    User.findById(req.params.user_id, (error, user) => {
        try {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({ message: 'Il manque des informations.' });
            }
            else {
                res.status(200);
                res.json(user);
            }
        }
        catch (error) {
            res.status(500);
            res.json({ message: 'Erreur serveur.' });
        }
    });
};

// exports.login_user = (req, res) => {
//     User.findOne()
// }
