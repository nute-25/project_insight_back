const moduleController = require('../controllers/moduleController');

module.exports = (app) => {
    app.route('/modules')
        .post(moduleController.create_a_module)
        .get(moduleController.list_all_modules);
        //.put(moduleController.update_a_module)
        //.delete(moduleController.delete_a_module)
  
  //app.route('/modules/:module_id')
      // .get(moduleController.get_a_module)
  
}