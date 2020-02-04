/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const sessionController = require('../controllers/sessionController');

module.exports = (app) => {
    app.route('/sessions')
        .post(sessionController.create_a_session)
        .get(sessionController.list_all_sessions);
        

  app.route('/sessions/:session_id')
        .put(sessionController.update_a_session)
        .delete(sessionController.delete_a_session);
};