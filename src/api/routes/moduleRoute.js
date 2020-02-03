const moduleController = require('../controllers/moduleController')

module.exports = (app) => {
  app.route('/sessions/:session_id/modules')
  .post(moduleController.create_a_module)
  .get(moduleController.list_all_modules)
  
  //app.route('/modules/:module_id')
  //.put(moduleController.update_a_module)
  //.delete(moduleController.delete_a_module)
}