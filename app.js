const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors);

//Importando Rotas
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//CONECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Conected to DB");
    });
//OUVIR PORTA
app.listen(8080); 