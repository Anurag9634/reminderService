const express = require('express');
const app = express();
const { PORT } = require('./src/config/serverconfig');
const bodyParser = require('body-parser');
const Apirouter = require('./src/routes/index');



const setupAndStartServer = () => {
    
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app.use('/api', Apirouter);

  app.listen(PORT, () => {
    console.log(`app is listening in ${PORT}`);
  });
};

setupAndStartServer();

