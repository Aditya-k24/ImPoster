 const express = require('express');
 const morgan = require('morgan');
 const dotenv = require('dotenv')
 const connectDB = require('./config/config.js');
require('colors');

//config dotenv
dotenv.config();

//connect db
connectDB();


const app = express();

//middle wares

app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/api/posters',require('./routes/posterRoutes'));
app.use('/api/users',require("./routes/userRoute"));
app.get('/',(req,res)=>{ 
    res.send("<h1>Hey there new data is here</h1>")
});

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`server running successfully ${process.env.NODE_ENV}`)
})