module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.home_controller.index(application,req,res);
    });

    application.get('/index', function (req, res) {
        application.app.controllers.home_controller.index(application,req,res);
    });

    application.get('/home', function (req, res) {
        application.app.controllers.home_controller.index(application,req,res);
    });

}