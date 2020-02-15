const moduleController = require('../controllers/moduleController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

module.exports = (app) => {
    app.route('/sessions/:session_id/modules')
        .post(jwtMiddleware.verify_token, moduleController.create_a_module_from_a_session)
        .get(jwtMiddleware.verify_token, moduleController.list_all_modules_from_a_session)
        .delete(jwtMiddleware.verify_token, moduleController.delete_a_module_from_a_session);
    app.route('/modules')
        .put(jwtMiddleware.verify_token, moduleController.update_a_module)
        .get(jwtMiddleware.verify_token, moduleController.get_a_module);
};
