const markController = require('../controllers/markController');

module.exports = (app) => {
    app.route('/modules/:module_id/marks')
        .post(markController.register_a_mark)
        .get(markController.get_average_mark_from_a_module);
};
