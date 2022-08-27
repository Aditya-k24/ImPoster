const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors')
const conectDB = require('./config/config');
const Poster = require('./models/posterModel');
const Posters = require('./data/posters-data');
const connectDB = require('./config/config');

//config dotenv and mongodb conn file
dotenv.config()
connectDB()

//import data
const importData = async () => {
    try{
        await Poster.deleteMany()
        const sampleData = Posters.map(poster =>{return {...poster}})
        await Poster.insertMany(sampleData)
        console.log(("imported"));
        process.exit()

    }
    catch(e){
        console.log(e)
        process.exit(1)
    }
}

const dataDestroy = () => {}

if (process.argv[2] === '-d'){
    dataDestroy()
}
else{
    importData()
}