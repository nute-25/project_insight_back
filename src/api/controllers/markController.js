/** Import models **/
const Mark = require('../models/markModel');
const Module = require('../models/moduleModel');

exports.register_a_mark = (req, res) => {
    const new_mark = new Mark(req.body);
    const { module_id } = req.params;
    new_mark.module_id = module_id;

    try {
        Module.findById(module_id, (error, module) => {
            if (module) {
                // the module exists
                // console.log(`module_id : ${module_id} existe, enregistrement de la note`);

                /** Register mark */
                new_mark.save((error, mark) => {
                    if (error) {
                        res.status(400);
                        console.warn(error);
                        res.json({ message: 'Il manque des informations' });
                    }
                    else {
                        res.status(201);
                        res.json(mark);
                    }
                });
            }
            // else {
            //     console.log(`module_id : ${module_id} n'existe pas`);
            // }
        });
    }
    catch (error) {
        // le serveur n'a su exécuter la requête du client
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur' });
    }
};


// exports.get_average_mark_from_a_module = (req, res) => {
//     const { module_id } = req.params;

//     try {
//         Module.findById(module_id, (error, module) => {
//             if (module) {
//                 // the module exists
//                 // console.log(`module_id : ${module_id} existe, enregistrement de la note`);

//                 Mark.find({ module_id: module_id }, (error, marks) => {
//                     if (error) {
//                         res.status(500);
//                         console.warn(error);
//                         res.json({ message: 'Erreur serveur.' });
//                     }
//                     else {
//                         res.status(200);
//                         // return marks
//                         res.json(marks);
//                         // sum += marks.mark
//                         // avg= sum /i
//                     }
//                 });
//             }
//             // else {
//             //     console.log(`module_id : ${module_id} n'existe pas`);
//             // }
//         });
//     }
//     catch (error) {
//         // le serveur n'a su exécuter la requête du client
//         res.status(500);
//         console.warn(error);
//         res.json({ message: 'Erreur serveur' });
//     }
// };
