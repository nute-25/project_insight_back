/** Import librairy and module model **/
const Module = require('../models/moduleModel');
const Session = require('../models/sessionModel');
// CREATE
exports.create_a_module_from_a_session = (req, res) => {
    const new_module = new Module(req.body);
    new_module.session_id = req.params.session_id;
    try {
        Session.findById(req.params.session_id, (error, session) => {
            if (session) {
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
            else {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Cette session n\'existe pas' });
            }
        });
    }
    catch (error) {
        res.status((500));
        console.warn(error);
        res.json({ message: 'Erreur de serveur !!' });
    }
};
// READ
exports.list_all_modules_from_a_session = (req, res) => {
    try {
        Session.findById(req.params.session_id, (error, session) => {
            if (session) {
                // res.json('session_id : ${session_id} existe');
                Module.find({ session_id: req.params.session_id }, (error, modules) => {
                    if (error) {
                        res.status(500);
                        console.warn(error);
                        res.json({ message: 'Erreur serveur !!' });
                    }
                    else {
                        res.status(200);
                        res.json(modules);
                    }
                });
            }
            else {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Cette session n\'existe pas' });
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
            if (session) {
                Module.findByIdAndRemove(req.body.module_id, (error) => {
                    if (error) {
                        res.status(400);
                        console.warn(error);
                        res.json({ message: 'Il manque des informations' });
                    }
                    else {
                        res.status(200);
                        res.json({ message: 'Le module a bien été supprimé' });
                    }
                });
            }
            else {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Cette session n\'existe pas' });
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
