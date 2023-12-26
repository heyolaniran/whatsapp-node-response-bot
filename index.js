var express = require('express') ; 
var app  = express() ; 
const qrcode = require('qrcode');
app.set('view engine', 'ejs'); 

const { Client, NoAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy : new NoAuth() 
});

app.get('/', function(req, res) {

    client.on('qr', qr => {
        qrcode.toDataURL(qr, (err, url) => {
            res.render('pages/index', {
                connect : url
            })
        });
    });


    client.on('ready', () => {
        console.log('Client is ready!');
    });
    
    
    client.on('message', message => {
        if(message.body === 'Bonjour') {
            return client.sendMessage(message.from, 'Bonjour, en quoi pouvons nous vous aider ? ');
        }
    
        return client.sendMessage(message.from, 'Bonjour, en quoi pouvons nous vous aider ? ');
    });

    // client initalisation
    client.initialize();

})












    


 

 

 

 