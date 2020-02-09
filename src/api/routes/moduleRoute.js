const moduleController = require('../controllers/moduleController');

module.exports = (app) => {
    app.route('sessions/session_id/module_id')
        .post(moduleController.create_a_module)
        .put(moduleController.update_a_module_from_a_session)
        .delete(moduleController.delete_a_module_from_a_session);

    app.route('sessions/session_id/modules')
        .get(moduleController.list_all_modules_from_a_session);
};
/* {
        app.route('/modules')
        .post(moduleController.create_a_module)
        .get(moduleController.list_all_modules)
        .put(moduleController.update_a_module)
        .delete(moduleController.delete_a_module);

    app.route('/modules/:module_id')
        .get(moduleController.get_a_module);
};
*/