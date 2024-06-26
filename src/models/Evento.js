const { Schema, model } = require( 'mongoose' );

const EventoSchema = new Schema({
    name:{
        type:String,
        required : true
    },
    description: {
        type: String
    },
    price :{
        type : Number,
        default: 0
    },
    finalDate:  {
         type: Date,
         default: Date.now
    },
    initialDate:  {
        type: Date,
        default: Date.now
    },
})

const EventoModel = model( 'Evento', EventoSchema );

module.exports = EventoModel;