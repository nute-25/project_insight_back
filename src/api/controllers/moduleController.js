/** Import librairy and models **/
const Module = require('../models/moduleModel');
const Session = require('../models/sessionModel');
// CREATE
exports.create_a_module_from_a_session = (req, res) => {
    const new_module = new Module(req.body);
    const { session_id } = req.params;
    new_module.session_id = session_id;
    try {
        Session.findById(session_id, (error, session) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Session introuvable' });
            }
            else {
                new_module.save((error, module) =>{
                    if (error) {
                        res.status(400);
                        console.warn(error);
                        res.json({ message: 'Il manque des informations' });
                    }
                    else {
                        res.status(201);
                        res.json(module);
                    }
                });
            }
        });
    }
    catch (error) {
        res.status((500));
        console.warn(error);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// READ
exports.list_all_modules_from_a_session = (req, res) => {
    try {
        const { session_id } = req.params;
        Session.findById(session_id, (error, session) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Session introuvable' });
            }
            else {
                Module.find({ session_id }, (error, modules) => {
                    if (error) {
                        res.status(400);
                        console.warn(error);
                        res.json({ message: 'Votre demande n\'a pu aboutir' });
                    }
                    else {
                        res.status(200);
                        res.json(modules);
                    }
                });
            }
        });
    }
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// DELETE
exports.delete_a_module_from_a_session = (req, res) => {
    try {
        Session.findById(req.params.session_id, (error, session) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Session introuvable' });
            }
            else {
                Module.findByIdAndRemove(req.body.module_id, (error) => {
                    if (error) {
                        res.status(400);
                        console.warn(error);
                        res.json({ message: 'Module introuvable' });
                    }
                    else {
                        res.status(200);
                        res.json({ message: 'Le module a bien été supprimé' });
                    }
                });
            }
        });
    }
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// UPDATE
exports.update_a_module = (req, res) => {
    try {
        Module.findByIdAndUpdate(req.body.module_id, req.body, { new: true }, (error, module) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Module introuvable' });
            }
            else {
                res.status(200);
                res.json(module);
            }
        });
    }
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur' });
    }
};
// GET A MODULE
exports.get_a_module = (req, res) => {
    try {
        Module.findById(req.body.module_id, (error, module) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Module introuvable' });
            }
            else {
                res.status(200);
                res.json(module);
            }
        });
    }
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur' });
    }
};
// exports.list_all_modules_from_a_session = (req, res) => {
//     Session.findById( req.params.session_id, (error, session) => {
//         if (session) {
//             res.json(session);
//             Module.find({ session_id: req.params.session_id }, (error, modules) => {
//                 if (error) {
//                     res.status(500);
//                     console.warn(error);
//                     res.json({ message: 'Erreur serveur.' });
//                 }
//                 else {
//                     res.status(200);
//                     res.json(modules);
//                 }
//             });
//         }
//     });
// Module.find({ session_id: req.params.session_id }, (error, modules) => {
//     if (error) {
//         res.status(500);
//         console.warn(error);
//         res.json({ message: 'Erreur serveur.' });
//     }
//     else {
//         res.status(200);
//         res.json(modules);
//     }
// });
