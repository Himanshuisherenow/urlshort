const express = require('express'); 
const  dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const colors = require('colors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port , ()=>console.log(`Server is Started Running`.bgMagenta));