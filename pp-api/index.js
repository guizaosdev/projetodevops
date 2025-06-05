require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('./swagger.json');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
const userController = require('./controllers/userController');
app.use('/user', userController);

const loginController = require('./controllers/loginController');
app.use('/login', loginController);

const user = process.env.DB_USER;
const pass = encodeURIComponent(process.env.DB_PASS);
const cluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;

const uri = `mongodb+srv://${user}:${pass}@${cluster}/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri).then(() => {
    console.log('MongoDB Connected');
    app.listen(8000);
})
.catch(() => {
    console.log('Erro ao conectar no banco de dados');
});