function NoticiaModel(connection) {
    this._connection = connection;
}

NoticiaModel.prototype.getNoticias = function (callback) {
    var sql = 'select * from noticias';
    this._connection.query(sql, callback);
}

NoticiaModel.prototype.getNoticia = function (callback) {
    var sql = 'select * from noticias where id_noticia = 2';
    this._connection.query(sql, callback);
}

NoticiaModel.prototype.salvarNoticia = function (noticia, callback) {
    console.log(noticia);
    //var sql1 = "insert into noticias (titulo, noticia) values ('" + noticia.titulo + "','" +  noticia.noticia + "')";
    var sql2 = 'insert into noticias set ? ';
    //this._connection.query(sql1, callback);
    this._connection.query(sql2, noticia, callback);
}



module.exports = function () {
    return NoticiaModel;
}