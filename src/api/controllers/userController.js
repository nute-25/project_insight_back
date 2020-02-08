/** Import librairies and user model **/
// const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const saltRounds = 10;


exports.register_a_user = (req, res) => {
    const new_user = new User(req.body);

    try {
        let { password } = req.body;
        // hachage du mdp
        password = bcrypt.hashSync(password, saltRounds);
        new_user.password = password;

        new_user.save((error, user) => {
            // if user tries to duplicate a unique value
            if (error && error.code === 11000) {
                res.status(405);
                const key_list = Object.keys(error.keyValue);
                let error_msg = '';
                for (const key of key_list) {
                    switch (key) {
                        case 'pseudo':
                            error_msg += 'Le pseudo "' + error.keyValue[key]
                                + '" existe déjà. Merci d\'en choisir un nouveau.';
                            break;
                        default:
                            error_msg += 'La valeur du champs "' + key
                                + '" existe déjà. Merci d\'en choisir une nouvelle.';
                            break;
                    }
                }
                res.json({ message: error_msg });
            }
            else if (error) {
                res.status(400);
                res.json({ message: 'Il manque des informations' });
            }
            else {
                res.status(201);


                // user = user.toObject();
                // user.password = undefined;
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
            console.warn(error);
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
                console.warn(error);
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
    try {
        User.findByIdAndRemove(req.body._id, (error) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Id introuvable' });
            }
            else {
                res.status(200);
                res.json({ message: 'L\'utilisateur a bien été supprimé' });
            }
        });
    }
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur' });
    }
};

exports.get_a_user = (req, res) => {
    User.findById(req.params.user_id, (error, user) => {
        try {
            if (error) {
                res.status(400);
                console.warn(error);
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

exports.login_user = (req, res) => {
    try {
        if (typeof req.body.pseudo === 'undefined' || typeof req.body.password === 'undefined') {
            res.status(401);
            res.json({ message: 'Vous devez renseigner votre pseudo et votre mot de passe.' });
        }
        else {
            User.findOne({ pseudo: req.body.pseudo }, (error, user) => {
                if (user === null || !bcrypt.compareSync(req.body.password, user.password)) {
                    // no user is found with this pseudo or wrong password
                    res.status(401);
                    console.warn(error);
                    res.json({ message: 'Votre pseudo ou mot de passe est incorrect.' });
                }
                else {
                    res.status(200);
                    res.json({ message: 'Vous êtes connecté.' });
                }
            });
        }
    }
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur.' });
    }
};
