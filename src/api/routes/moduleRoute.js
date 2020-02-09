const moduleController = require('../controllers/moduleController');

module.exports = (app) => {
    app.route('/sessions/:session_id/modules')
        .get(moduleController.list_all_modules_from_a_session);
};
