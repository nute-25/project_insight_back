/** Import librairy and user model **/
// const jwt = require('jsonwebtoken');
const Module = require('../models/moduleModel')

//CREATE
exports.create_a_module = (req, res) => {
    let new_module = new Module(req.body)
    try {
        new_module.save((error, user) =>{
            if (error) {
                res.status(400)
                console.log(error)
                res.json({ message: "Il manque des informations pour la création" })
                
            } else {
                res.status(201)
                res.json(modules)
            }
        })
    } catch (e) {
            res.status((500))
            console.log(e)
            res.json({ message: "Erreur de serveur !!" })
    }
}
//READ
exports.list_all_modules = (req, res) => {
    Module.find({}, (error, modules) => {
        if (error) {
            res.status(500)
            console.log(error)
            res.json({message: "Erreur serveur !!"})
        } else {
            res.status(200)
            res.json(modules)
        }
    })
}
