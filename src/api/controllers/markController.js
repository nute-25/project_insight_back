/** Import models **/
const Mark = require('../models/markModel');
const Module = require('../models/moduleModel');

exports.register_a_mark = (req, res) => {
    const new_mark = new Mark(req.body);
    const { module_id } = req.params;
    new_mark.module_id = module_id;

    try {
        Module.findById(module_id, (error, module) => {
            if (error) {
                res.status(400);
                console.warn(error);
                res.json({ message: 'Module introuvable' });
            }
            else {
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
        });
    }
    catch (error) {
        // le serveur n'a su exécuter la requête du client
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur' });
    }
};


exports.get_average_mark_from_a_module = (req, res) => {
    try {
        Mark.aggregate(
            [
                {
                    $group: {
                        _id: '$module_id',
                        avgMark: { $avg: '$mark' },
                    },
                },
            ], (aggregate_error, aggregate_result) => {
                if (aggregate_error) {
                    res.status(400);
                    console.warn(error);
                    res.json({ aggregate_error });
                }
                else {
                    // Module.findById(aggregate_result._id, (error, module) => {
                    //     if (error) {
                    //         res.status(400);
                    //         console.warn(error);
                    //         res.json({ message: 'Module introuvable' });
                    //     }
                    //     else {
                    //         res.status(200);
                    //         // start_date, end_date, speaker_id => first_name and name of user
                    //     }
                    // });
                    res.status(200);
                    res.json({ aggregate_result });
                }
            },
        );
    }
    catch (error) {
        // le serveur n'a su exécuter la requête du client
        res.status(500);
        console.warn(error);
        res.json({ message: 'Erreur serveur' });
    }
};
