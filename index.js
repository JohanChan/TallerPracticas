const express = require('express');
var bodyParser = require('body-parser');
const db_credentials = require('./db_creds');
const mysql = require('mysql');
const { response } = require('express');

const app = express();
const port = process.env.PORT || 9000;
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))


var conn = mysql.createPool(db_credentials);

app.get('/', async (req,res)=>{
    /*const consulta = "select * from region where codRegion = 1";
    let resulado = await conn.query(consulta, [], (err, response)=>{
        if(err) throw err;
        res.status(200).send(response);
    })*/
    res.send('Hola estoy corriendo en HEROKU!!');
})

app.get('/raiz', async (req,res)=>{
    const consulta = "select * from prueba";
    let resulado = await conn.query(consulta, [], (err, response)=>{
        if(err) throw err;
        res.status(200).send(response);
    })
})
//app.post('/login', (req,res)=>{

    /**Consulta base de datos para Login */ 
//    const { usuario, contra } = req.body;
//    let consulta = 'select * from Usuario where ?'
//    conn.query(consulta,[usuario,contra], (err, response)=>{
 //       if(err) throw err;
//        res.send(response);
//    })
    /***                       */

//    if(usuario === 'admin' && contra === 'admin'){
//        res.send('Credenciales correctas');
        /*res.json({ 
            "usuario": usuario,
            "contraseña": contra
         });*/
//    }else{
//        res.send('Credenciales incorrectas');
//    }
//})


app.listen(port, (err,res)=>{
    if(err) throw err
    console.log('Servidor escuchando en puerto '+port);
});