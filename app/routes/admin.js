module.exports = function (application) {

    application.get('/formulario_inclusao_noticia', function (req, res) {
        application.app.controllers.admin_controller.formulario_inclusao_noticia(application, req, res);
    });

    application.post('/noticias/salvar', function (req, res) {
        application.app.controllers.admin_controller.noticia_salvar(application, req, res);
    });
}