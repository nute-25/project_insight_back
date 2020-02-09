/** Import librairy and user model **/
const Module = require('../models/moduleModel');


exports.list_all_modules_from_a_session = (req, res) => {
    Module.find({ session_id: req.params.session_id }, (error, modules) => {
        if (error) {
            res.status(500);
            console.warn(error);
            res.json({ message: 'Erreur serveur.' });
        }
        else {
            res.status(200);
            res.json(modules);
        }
    });
};
