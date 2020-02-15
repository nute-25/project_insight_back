const markController = require('../controllers/markController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

module.exports = (app) => {
    app.route('/modules/:module_id/marks')
        .post(jwtMiddleware.verify_token, markController.register_a_mark);

    app.route('/marks/average')
        .get(jwtMiddleware.verify_token, markController.get_average_mark_from_a_module);
};
