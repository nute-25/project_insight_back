const moduleController = require('../controllers/moduleController');

module.exports = (app) => {
    app.route('/sessions/:session_id/modules')
        .post(moduleController.create_a_module_from_a_session)
        .get(moduleController.list_all_modules_from_a_session)
        .delete(moduleController.delete_a_module_from_a_session);
};
