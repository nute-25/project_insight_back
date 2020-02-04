/** Import librairy and session model **/
const Session = require('../models/sessionModel');
// CREATE
exports.create_a_session = (req, res) => {
    const new_session = new Session(req.body);
    try {
        new_session.save((error, session) => {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({ message: 'Il manque des informations pour la création' });
            }
            else {
                res.status(201);
                res.json(session);
            }
        });
    }
    catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// READ
exports.list_all_sessions = (req, res) => {
    Session.find({}, (error, sessions) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: 'Erreur serveur !!' });
        }
        else {
            res.status(200);
            res.json(sessions);
        }
    });
};
// UPDATE
exports.update_a_session = (req, res) => {
    try {
        Session.findByIdAndUpdate(req.body._id, req.body, { new: true }, (error, session)=> {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({ message: 'Il manque des informations' });
            }
            else {
                res.status(200);
                res.json(session);
            }
        });
    }
    catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// DELETE
exports.delete_a_session = (req, res) => {
    try {
        Session.findByIdAndRemove(req.body._id, (error) => {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({ message: 'Il manque des informations' });
            }
            else {
                res.status(200);
                res.json({ message: 'La session a bien été supprimé' });
            }
        });
    }
    catch (e) {
        res.status(500);
        console.log(e);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// GET A SESSION
exports.get_a_session = (req, res) => {
    Session.findById(req.params.session_id, (error, session) => {
        try {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({ message: 'Il manque des informations' });
            }
            else {
                res.status(200);
                res.json(session);
            }
        }
        catch (e) {
            res.status(500);
            res.json({ message: 'Erreur serveur !!' });
        }
    });
};
