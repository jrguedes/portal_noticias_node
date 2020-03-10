module.exports.noticias = function (application, req, res) {

    var connection = application.config.db_connection();
    var noticiaModel = new application.app.models.NoticiaModel(connection);


    noticiaModel.getNoticias(function (error, result) {
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.db_connection();
    var noticiaModel = new application.app.models.NoticiaModel(connection);
    var id_noticia = req.query;

    noticiaModel.getNoticia(id_noticia, function (error, result) {

        res.render('noticias/noticia', { noticia: result });
    });
}