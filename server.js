var express = require('express');
var app = express();

app.use(express.static('public'))

var productos = [
    { id:1, pathImage: 'imagenes/iluminador.jpg', name: '150 Bs.', description: 'Anastasia MoonChild' },
    { id:2, pathImage: 'imagenes/ksombras.jpg', name: '120 Bs.', description: 'Sombras Kylie' },
    { id:3, pathImage: 'imagenes/correctores.jpg', name: '180 Bs.', description: 'Correctores de ojeras, manchas' },
    { id:4, pathImage: 'imagenes/alicate.jpg', name: '25 Bs.', description: 'Alicate saca cuticulas Mereheje' }
]


app.get('/devolverproductos', function (req, res) {
    res.send(productos);
})



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/practico.html');

})

app.get('/devolverusuario', function (req, res) {
    var usuario = { username: 'developer', password: 'developer1234' };
    res.send(usuario);

})


var server = app.listen(8081, function () {
    console.log("servidor arriba")
})


