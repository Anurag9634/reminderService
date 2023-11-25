const express = require('express');
const {PORT}  = require('./config/serverconfig')

const setupAndStartServer = async()=>{
const app = express();


app.listen(port , ()=>{
    console.log(`app is listening in ${port} `);
});

}


setupAndStartServer();
