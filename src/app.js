const express = require('express');
const morgan = require('morgan');

class Server{

    constructor(){
        this.app = express();
        this.config();
        this.start();
    }

    config(){
        this.app.set('port', process.env.PORT || 3000);
        //Midlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(){

    }

    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log("Server on port "+this.app.get('port'));
        })
    }

}
const server = new Server();
module.exports = server;