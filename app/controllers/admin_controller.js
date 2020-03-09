module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });

}

module.exports.noticia_salvar = function (application, req, res) {
    var noticia = req.body;
    var helper = new application.app.helpers.Helper();

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'A data da notícia é obrigatória').notEmpty();
    //req.assert('data_noticia', 'A data da notícia é obrigatória').custom(helper.isValidDate(noticia.data_noticia));
    req.assert('noticia', 'Notícia é obrigatória').notEmpty();

    var errors = req.validationErrors();

    console.log(errors);

    if (errors) {
        res.render('admin/form_add_noticia', { validacao: errors, noticia: noticia });
        return;
    }

    var connection = application.config.db_connection();
    var noticiaModel = new application.app.models.NoticiaModel(connection);

    noticiaModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}