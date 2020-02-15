const sessionController = require('../controllers/sessionController');
const jwtMiddleware = require('../middleware/jwtMiddleware');


module.exports = (app) => {
    app.route('/sessions')
        .post(jwtMiddleware.verify_token, sessionController.create_a_session)
        .get(jwtMiddleware.verify_token, sessionController.list_all_sessions)
        .put(jwtMiddleware.verify_token, sessionController.update_a_session)
        .delete(jwtMiddleware.verify_token, sessionController.delete_a_session);

    app.route('/sessions/:session_id')
        .get(jwtMiddleware.verify_token, sessionController.get_a_session);
};
