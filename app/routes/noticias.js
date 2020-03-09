
module.exports = function (application) {
    
    application.get('/noticias', function (req, res) {
        application.app.controllers.noticia_controller.noticias(application, req, res);
    });

    application.get('/noticia', function (req, res) {
        application.app.controllers.noticia_controller.noticia(application, req, res);
    });
}
