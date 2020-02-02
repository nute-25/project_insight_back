/** Import librairy and session model **/
// const jwt = require('jsonwebtoken')
const Session = require('../models/sessionModel')
// CREATE
exports.create_a_session = (req, res) => {
    const new_Session = new Session(req.body)
    try {
        new_session.save((error, session) => {
            if (error) {
                res.status(400)
                res.json({ message: "Manque d'information" })
            }
            else {
                res.status(201)
                res.json(session)
            }
        })
    } catch (e) {
        res.status(500)
        res.json({ message: "Erreur serveur !!" })
    }

}
//READ
exports.list_all_sessions = (req, res) => {
    Session.find({}, (error, sessions) => {
        if (error) {
            res.status(500)
            res.json({ message: "Erreur serveur !!" })
        }
        else {
            res.status(200)
            res.json(sessions)
        }
    })
}
//UPDATE
exports.update_a_session = (req, res) => {
    try {
        Session.findByIdAndUpdate(req.params.session_id, req.body, { new: true }, (error, session) => {
            if (error) {
                res.status(400)
                res.json({ message: "La session n'existe pas" })
            }
            else {
                res.status(200)
                res.json(session)
            }
        })
    } catch (e) {
        res.status(500)
        res.json({ message: "Erreur serveur !!" })
    }
}
//DELETE
exports.delete_a_session = (req, res) => {
    try {
        Session.findByIdAndRemove(req.params.session_id, (error) => {
            if (error) {
                res.status(400)
                res.json({ message: "La session n'existe pas" })
            }
            else {
                res.status(200);
                res.json({ message: "La session a bien été supprimé" })
            }
        })
    } catch (e) {
        res.status(500)
        res.json({ message: "Erreur serveur !!" })
    }
}