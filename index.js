const express = require('express');
const {PORT}  = require('./src/config/serverconfig')
const bodyParcer = require('body-parser');
const bodyParser = require('body-parser');

const setupAndStartServer = async()=>{
const app = express();


app.listen(PORT , ()=>{

    app.use(bodyParser.json());
    app.use(bodyParcer.urlencoded({extended : true}));
    
    console.log(`app is listening in ${PORT} `);
});

}


setupAndStartServer();
