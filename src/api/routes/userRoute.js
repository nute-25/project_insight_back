const userController = require('../controllers/userController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

module.exports = (app) => {
    app.route('/users')
        .post(userController.register_a_user)
        .get(jwtMiddleware.verify_token, userController.list_all_users)
        .put(jwtMiddleware.verify_token, userController.update_a_user)
        .delete(jwtMiddleware.verify_token, userController.delete_a_user);

    app.route('/users/:user_id')
        .get(jwtMiddleware.verify_token, userController.get_a_user);

    app.route('/users/login')
        .post(userController.login_user);
};
