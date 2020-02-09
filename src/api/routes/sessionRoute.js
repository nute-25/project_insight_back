const sessionController = require('../controllers/sessionController');
const jwtMiddleware = require('../middleware/jwtMiddleware');


module.exports = (app) => {
    app.route('/sessions')
        .post(/* jwtMiddleware.verify_token, */ sessionController.create_a_session)
        .get(sessionController.list_all_sessions)
        .put(sessionController.update_a_session)
        .delete(sessionController.delete_a_session);

    app.route('/sessions/:session_id')
        .get(sessionController.get_a_session);
};
