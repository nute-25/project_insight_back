const userController = require('../controllers/userController');

module.exports = (app) => {
    app.route('/users')
        .post(userController.register_a_user)
        .get(userController.list_all_users)
        .put(userController.update_a_user)
        .delete(userController.delete_a_user);

    app.route('/users/:user_id')
        .get(userController.get_a_user);

    app.route('/users/login')
        .post(userController.login_user);
}
