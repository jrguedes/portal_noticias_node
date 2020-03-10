module.exports.index = function (application, req, res) {
    var connection = application.config.db_connection();
    var noticiasModel = new application.app.models.NoticiaModel(connection);

    noticiasModel.get5UltimasNoticias(function (error, result) {
        console.log(result);
        res.render('home/index', { noticias: result });
    });

}