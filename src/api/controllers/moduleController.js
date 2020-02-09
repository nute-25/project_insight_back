/** Import librairy and user model **/
const Module = require('../models/moduleModel');
// si la session n'existe pas
// CREATE
exports.create_a_module = (req, res) => {
    const new_module = new Module(req.body);
    new_module.session_id = req.params.session_id;
    try {
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
    catch (error) {
        res.status((500));
        console.warn(error);
        res.json({ message: 'Erreur de serveur !!' });
    }
};
// UPDATE
exports.update_a_module_from_a_session = (req, res) => {
    module.session_id = req.params.session_id;
    try {
        Module.findByIdAndUpdate(req.body.module_id, req.body, { new: true }, (error, module) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Il manque des informations' });
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
        res.json({ message: 'Erreur serveur !!' });
    }
};
// DELETE
exports.delete_a_module_from_a_session = (req, res) => {
    module.session_id = req.params.session_id;
    try {
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
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// GET A MODULE FROM A SESSION
exports.get_a_module_from_a_session = (req, res) => {
    Module.findById(req.params.module_id, (error, module) => {
        module.session_id = req.params.session_id;
        try {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Il manque des informations' });
            }
            else {
                res.status(200);
                res.json(module);
            }
        }
        catch (error) {
            res.status(500);
            console.warn(error);
            res.json({ message: 'Erreur serveur !!' });
        }
    });
};
// READ
exports.list_all_modules_from_a_session = (req, res) => {
    Module.find({}, ({ session_id: req.params.session_id }, (error, module) => {
        if (error) {
            res.status(500);
            console.warn(error);
            res.json({ message: 'Erreur serveur !!' });
        }
        else {
            res.status(200);
            res.json(module);
        }
    }));
};

/*
// CREATE
exports.create_a_module = (req, res) => {
    const new_module = new Module(req.body);
    try {
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
    catch (error) {
        res.status((500));
        console.warn(error);
        res.json({ message: 'Erreur de serveur !!' });
    }
};
// READ
exports.list_all_modules = (req, res) => {
    Module.find({}, (error, module) => {
        if (error) {
            res.status(500);
            console.warn(error);
            res.json({ message: 'Erreur serveur !!' });
        }
        else {
            res.status(200);
            res.json(module);
        }
    });
};
// UPDATE
exports.update_a_module = (req, res) => {
    try {
        Module.findByIdAndUpdate(req.body._id, req.body, { new: true }, (error, module) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Il manque des informations' });
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
        res.json({ message: 'Erreur serveur !!' });
    }
};
// DELETE
exports.delete_a_module = (req, res) => {
    try {
        Module.findByIdAndRemove(req.body._id, (error) => {
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
    catch (error) {
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur !!' });
    }
};
// GET A MODULE
exports.get_a_module = (req, res) => {
    Module.findById(req.params.module_id, (error, module) => {
        try {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Il manque des informations' });
            }
            else {
                res.status(200);
                res.json(module);
            }
        }
        catch (error) {
            res.status(500);
            console.warn(error);
            res.json({ message: 'Erreur serveur !!' });
        }
    });
};
*/
