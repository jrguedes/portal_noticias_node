var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;
    var title = '';

    if (categoria == '/tecnologia') {
        title = 'Notícias de Tecnologia';
    } else if (categoria == '/moda') {
        title = 'Notícias de Moda';
    } else if (categoria == '/beleza') {
        title = 'Notícias de Beleza';
    } else {
        title = 'Portal de Notícias';
    }
    res.end('<html><body>' + title + '</body></html>');
});

server.listen(3000);

