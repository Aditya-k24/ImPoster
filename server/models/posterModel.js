const mongoose = require('mongoose');

const posterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    varients:[],
    prices:[],
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true,
    }
   
}, {timestamps : true}
);

const pizzaModel = mongoose.model("posters",posterSchema) ;

module.exports = pizzaModel;